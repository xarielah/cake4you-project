import { Box } from '@chakra-ui/react';
import ImageBG from '../public/first-parallax-bg.jpg';
const PrimeScreen = () => {
  return (
    <Box
      px={50}
      style={{
        backgroundImage: `url('${ImageBG.src}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      mt={10}
      borderRadius="md"
      w="100%"
      h="100px"
      boxShadow={'sm'} />
  );
};

export default PrimeScreen;
