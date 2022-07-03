import { Box, Image, Text, HStack } from '@chakra-ui/react';
import logo from '../public/logo_t.png';
import NextLink from 'next/link';
import HeadMenu from './menu';
import PrimeScreen from './primescreen';
import FadeElement from './layouts/fadeelemnts';
import { Container } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <Box zIndex={'10'} w="100%" boxShadow="lg" bg={'whiteAlpha.800'} p={3} position="sticky" top={0} align="center">
        <NextLink href="/">
          <HStack justify="center">
            <Text fontSize={'1.2em'} fontWeight={'bold'} color="pink.200">
              Cake4You
            </Text>
            <Image src={logo.src} cursor="pointer" alt="logo" w={'2.5em'} boxShadow={'md'} borderRadius={'full'} />
          </HStack>
        </NextLink>
      </Box>

      <Container maxW={'container.xl'}>
        <FadeElement>
          <PrimeScreen />
        </FadeElement>
      </Container>

      <Box w="100%" bg="white">
        <HeadMenu />
      </Box>
    </>
  );
};

export default Navbar;
