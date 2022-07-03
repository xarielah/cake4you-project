import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';

const RespoinsiveBox = ({ children }) => (
  <Box w="100%" mt={10} textAlign="center">
    {children}
  </Box>
);

const SimpleSection = ({ secTitle, secDesc }) => {
  const borderProps = '1px solid #0a0a0a22'
  return (
    <Flex>
      <RespoinsiveBox>
        <Container maxW={'container.md'}>
          <Heading py={6} color={'pink.700'} borderTop={borderProps} borderBottom={borderProps} size="lg">
            {secTitle}
          </Heading>
          <Text my={10} fontSize=".9em">
            {secDesc}
          </Text>
        </Container>
      </RespoinsiveBox>
    </Flex>
  );
};

export default SimpleSection;
