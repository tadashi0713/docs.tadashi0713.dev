import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>tadashi0713 Docs</span>,
  project: {
    link: 'https://github.com/tadashi0713/doc',
  },
  docsRepositoryBase: 'https://github.com/tadashi0713/doc/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: "%s | tadashi0713 Docs"
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.tadashi0713.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'tadashi0713 Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Collections of documents created by Tadashi Nemoto(tadashi0713)'}
        />
      </>
    )
  },
  footer: {
    text: 'tadashi0713 Docs',
  },
  faviconGlyph: '📚',
}

export default config
