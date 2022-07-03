import { Box, Heading, VStack } from '@chakra-ui/react';
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
      borderRadius="xl"
      w="100%"
      h="200px"
      boxShadow={'lg'}>
      <VStack py={4} spacing={20}>
        <Heading color={'gray.700'} m={10} align="right" fontSize={{ base: '3em', md: '2em' }}>
          הנאה צרופה מתחילה,
          <br />
          כבר במבט הראשון...
        </Heading>
      </VStack>
    </Box>
  );
};

export default PrimeScreen;
