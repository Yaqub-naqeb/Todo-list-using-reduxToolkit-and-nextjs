import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Layout from '../component/Layout'
export default function App({ Component, pageProps }) {
  return (

    <Layout>
       <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
    </Layout>


   
  )}
