import '@/styles/globals.css'
import wrapper from "../store/index";
import { AuthProvider } from "../context/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

/* export default wrapper.withRedux(App); */
