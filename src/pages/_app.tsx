import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
