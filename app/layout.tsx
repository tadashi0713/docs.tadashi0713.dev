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
  openGraph: {
    url: './',
    siteName: 'tadashi0713 Docs',
    locale: 'ja_JP',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://docs.tadashi0713.dev',
  },
  alternates: {
    canonical: './',
  },
}

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
