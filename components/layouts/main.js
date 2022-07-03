import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Navbar from '../navbar';
import FadeElement from './fadeelemnts';
import Footer from '../footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cake4You - חלום מתוק</title>
      </Head>

      <Navbar />

      <Container maxW="container.xl">
        <FadeElement index={0.5}>
          {children}
        </FadeElement>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
