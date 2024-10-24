import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800 }}>📚 tadashi0713 Docs</span>,
  project: {
    link: 'https://github.com/tadashi0713/doc',
  },
  docsRepositoryBase: 'https://github.com/tadashi0713/doc/tree/main',
  head: () => {
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
      <>
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
      </>
    )
  },
  footer: {
    content: (
      <>
        <Analytics />
        <GoogleAnalytics gaId="G-SZP0XJE85W" />
        <GoogleTagManager gtmId="G-SZP0XJE85W" />
        <span>tadashi0713 Docs</span>
      </>
    ),
  },
  faviconGlyph: '📚',
}

export default config
