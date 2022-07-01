import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

const RespoinsiveBox = ({ children }) => (
  <Box align="center" p={7} m="auto" w={{ base: '100%', md: '50%' }}>
    {children}
  </Box>
);

const SimpleSection = ({ pic, secTitle, secDesc, reverse }) => {
  return (
    <Flex flexDirection={{ base: `${!reverse ? 'column-reverse' : 'column'}`, md: `${reverse ? 'row-reverse' : 'row'}` }}>
      <RespoinsiveBox>
        <Heading mb={2} letterSpacing={'tighter'} fontStyle={'italic'} size="lg">
          {secTitle}
        </Heading>
        <Text fontSize="1.2em" lineHeight={1.3}>
          {secDesc}
        </Text>
      </RespoinsiveBox>
      <RespoinsiveBox>
        <Image borderRadius={'full'} w={'300px'} boxShadow="md" h={'300px'} objectFit="cover" src={pic.src} alt="display pic" />
      </RespoinsiveBox>
    </Flex>
  );
};

export default SimpleSection;
