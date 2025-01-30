import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
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
  const { asPath, defaultLocale, locale } = useRouter()
  const { frontMatter } = useConfig()
  const url =
    'https://docs.tadashi0713.dev' +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
  const title = frontMatter.title || 'tadashi0713 Docs'
  const description =
    frontMatter.description ||
    'Collections of documents created by Tadashi Nemoto(tadashi0713)'
  const ogImage = `https://docs.tadashi0713.dev/api/og?title=${encodeURIComponent(title)}`

  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="📚">
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content="tadashi0713 Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} key={ogImage} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="api/icon" type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="api/icon"
          type="image/png"
          sizes="32x32"
        />
      </Head>
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
