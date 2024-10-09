import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { Analytics } from '@vercel/analytics/react'

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
    const description = frontMatter.description || 'Collections of documents created by Tadashi Nemoto(tadashi0713)'
    return (
      <>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={description}
        />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={`https://docs.tadashi0713.dev/api/og?title=${title}`}
        />
      </>
    )
  },
  footer: {
    content: (
      <>
        <Analytics />
        <span>tadashi0713 Docs</span>
      </>
    ),
  },
  faviconGlyph: '📚',
}

export default config
