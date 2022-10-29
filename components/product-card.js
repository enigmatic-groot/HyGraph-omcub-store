import Link from 'next/link'
import Image from 'next/image'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { useSettingsContext } from '@/context/settings'

function ProductCard({ id, images, name, price, slug }) {
  const { activeCurrency } = useSettingsContext()

  const [primaryImage1, primaryImage2] = images

  return (
    <article key={id}>
      <Link href={`/products/${slug}`}>
        <a className=" no-underline w-full h-full flex">
          <div className="bg-gray-50 rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
            <div className="relative group">
              <div
                className={`relative ${
                  primaryImage2 ? 'group-hover:hidden' : ''
                }`}
              >
                {primaryImage1 ? (
                  <Image
                    src={primaryImage1.url}
                    height={primaryImage1.height}
                    width={primaryImage1.width}
                    alt={name}
                    title={name}
                  />
                ) : null}
              </div>
              {primaryImage2 && (
                <div className="relative hidden group-hover:block">
                  <Image
                    src={primaryImage2.url}
                    height={primaryImage2.height}
                    width={primaryImage2.width}
                    alt={name}
                    title={name}
                  />
                </div>
              )}
            </div>

            <div className="pt-3 md:pt-6 text-center">
              <p className="text-gray-800 font-semibold text-lg hover:text-indigo-600 mb-1">
                {name}
              </p>
              <p className="text-gray-400 text-sm">
                {formatCurrencyValue({
                  currency: activeCurrency,
                  value: price
                })}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProductCard
