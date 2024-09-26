import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="tadashi0713 Docs" />
      <meta property="og:description" content="Collections of documents created by Tadashi Nemoto(tadashi0713)." />
    </>
  ),
  footer: {
    text: 'tadashi0713 Docs',
  },
  faviconGlyph: '📚',
}

export default config
