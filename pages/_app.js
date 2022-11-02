import { CartProvider } from 'react-use-cart'

import '../styles/global.css'

import { SettingsProvider } from '@/context/settings'
import Layout from '@/components/Layout'

function App({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <CartProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SettingsProvider>
  )
}

export default App
