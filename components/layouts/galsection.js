import { Box, Flex, Heading, SimpleGrid, Image, Divider } from '@chakra-ui/react';

const RespoinsiveBox = () => (
  <Box w="100%" mt={10} textAlign="center">
    {children}
  </Box>
);

const GalSection = ({ secTitle, picArr }) => {
  return (
    <Flex>
      <RespoinsiveBox>
        <Divider style={{ color: 'black' }} />
        <Heading my={6} size="lg">
          {secTitle}
        </Heading>
        <Divider style={{ color: 'black' }} />
        <SimpleGrid>
          {/* {picArr.map((item, index) => (
            <Image key={index} src={item.src} alt="pic" />
          ))} */}
        </SimpleGrid>
      </RespoinsiveBox>
    </Flex>
  );
};

export default GalSection;
