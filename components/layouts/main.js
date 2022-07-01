import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Navbar from '../navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cake4You - חלום מתוק</title>
      </Head>

      <Navbar />

      <Container maxW="container.xl">{children}</Container>
    </>
  );
};

export default MainLayout;
