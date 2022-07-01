import RtlProvider from '../components/layouts/rtl-provider';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import '../styles/parallax.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <RtlProvider>
      <ChakraProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </RtlProvider>
  );
}

export default MyApp;
