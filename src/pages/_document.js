import { extractCritical } from '@emotion/server'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <>
        {initialProps.styles}
        <style data-emotion-css={critical.ids.join(' ')} dangerouslySetInnerHTML={{ __html: critical.css }} />
      </>
    )

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style data-emotion-css={this.props.ids?.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="preload" href="/fonts/CHULALONGKORNReg.ttf" as="font" type="font/ttf" crossOrigin="" />
          <link rel="preload" href="/fonts/CHULALONGKORNBold.ttf" as="font" type="font/ttf" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
