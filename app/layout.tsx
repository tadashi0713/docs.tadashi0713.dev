import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'

const navbar = (
  <Navbar
    logo={
      <>
        <span style={{ fontWeight: 800 }}>📚 tadashi0713 Docs</span>
      </>
    }
    projectLink="https://github.com/tadashi0713/docs.tadashi0713.dev"
  />
)

const footer = <Footer>{new Date().getFullYear()} Tadashi Nemoto</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📚"></Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/tadashi0713/doc/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
        <Analytics />
        <GoogleAnalytics gaId="G-SZP0XJE85W" />
        <GoogleTagManager gtmId="G-SZP0XJE85W" />
      </body>
    </html>
  )
}
