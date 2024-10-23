import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
        <GoogleAnalytics gaId="G-SZP0XJE85W" />
        <GoogleTagManager gtmId="G-SZP0XJE85W" />
      </Html>
    )
  }
}

export default MyDocument
