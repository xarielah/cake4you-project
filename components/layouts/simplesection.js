import { Box, Flex, Heading, Text, Image, Divider } from '@chakra-ui/react';

const RespoinsiveBox = ({ children }) => (
  <Box w="100%" mt={10} textAlign="center">
    {children}
  </Box>
);

const SimpleSection = ({ secTitle, secDesc }) => {
  return (
    <Flex>
      <RespoinsiveBox>
        <Divider style={{ color: 'black' }} />
        <Heading my={6} size="lg">
          {secTitle}
        </Heading>
        <Divider style={{ color: 'black' }} />
        <Text my={5} fontSize="1em" lineHeight={1.5}>
          {secDesc}
        </Text>
      </RespoinsiveBox>
    </Flex>
  );
};

export default SimpleSection;
