import { Box, Image, Link } from '@chakra-ui/react';
import logo from '../public/logo_t.png';
import NextLink from 'next/link';
import HeadMenu from './menu';

const Navbar = () => {
  return (
    <>
      <Box zIndex={'10'} top={0} p={3} position="sticky" w="100%" align="center">
        <NextLink href="/">
          <Image
            src={logo.src}
            cursor="pointer"
            alt="logo"
            w={{ base: '5em', md: '5em' }}
            boxShadow={'lg'}
            borderRadius={'full'}
          />
        </NextLink>
      </Box>
      <Box w="100%" bg="white">
        <HeadMenu />
      </Box>
    </>
  );
};

export default Navbar;
