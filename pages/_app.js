import '../styles/globals.css'

import { MoralisProvider, useMoralis } from 'react-moralis'

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider appId='4KgChgRkBYJ1KnqubT1zOjbyn3KcT2nsoo14MBrx'
      serverUrl='https://1ich1jsbmeqb.usemoralis.com:2053/server'>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}
export default MyApp
