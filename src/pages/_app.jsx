// import App from 'next/app'
import Head from 'next/head'
import { useBgColor } from 'src/hooks/useBgColor';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();  
  const inputArray = useInputArray();
  useBgColor();

  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp