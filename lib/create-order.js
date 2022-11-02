import hygraphMutationClient, { gql } from '@/lib/hygraph-mutation-client'
import stripe from '@/lib/stripe-client'

export const createOrderMutation = gql`
  mutation CreateOrderMutation($order: OrderCreateInput!) {
    order: createOrder(data: $order) {
      id
    }
  }
`
async function createOrder({ sessionId }) {
  const {
    customer_details,
    line_items,
    ...session
  } = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price.product', 'customer_details']
  })

  return await hygraphMutationClient.request(createOrderMutation, {
    order: {
      email: customer_details.email,
      total: session.amount_total,
      stripeCheckoutId: session.id,
      orderItems: {
        create: line_items.data.map((item) => ({
          quantity: item.quantity,
          total: item.amount_total,
          product: {
            connect: {
              id: item.price.product.metadata.productId
            }
          }
        }))
      }
    }
  })
}

export default createOrder
