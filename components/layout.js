import { DefaultSeo } from 'next-seo'
import { useWindowScrollPosition } from 'rooks'

import { defaultSeo } from 'next-seo.config'
import Footer from '@/components/footer'
import Header from '@/components/header/Header'

function Layout({ children, footer, navigation }) {
  const { scrollY } = useWindowScrollPosition()

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <div
        className={
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        }
      >
        <Header scrollY={scrollY} {...navigation} />

        <main>
          <div>{children}</div>
        </main>

        <Footer {...footer} />
      </div>
    </>
  )
}

export default Layout
