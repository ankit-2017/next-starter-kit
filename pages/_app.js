import { wrapper } from '../src/redux/store'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(MyApp)
