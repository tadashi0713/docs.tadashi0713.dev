import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://docs.tadashi0713.dev'),
  title: {
    template: '%s - tadashi0713 Docs',
  },
  description:
    'Collections of documents created by Tadashi Nemoto(tadashi0713)',
  applicationName: 'tadashi0713 Docs',
  generator: 'Next.js',
  appleWebApp: {
    title: 'tadashi0713 Docs',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://docs.tadashi0713.dev',
  },
}

const navbar = (
  <Navbar
    logo={
      <>
        <span style={{ fontWeight: 800 }}>📚 tadashi0713 Docs</span>
      </>
    }
  />
)

const footer = <Footer>{new Date().getFullYear()} Tadashi Nemoto</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📚" />
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
      </body>
    </html>
  )
}
