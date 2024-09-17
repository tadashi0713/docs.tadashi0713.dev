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
  footer: {
    text: 'tadashi0713 Docs',
  },
  faviconGlyph: '📚',
}

export default config
