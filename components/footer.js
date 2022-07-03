import { Box, Container, HStack, Image, Heading, Text, Divider, Link } from '@chakra-ui/react'
import footerLogo from '../public/logo.png'
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <Box bg={'gray.100'} p={10}>
            <Container maxW={'container.md'}>
                <HStack justify="space-between">
                    <Box w="100%">
                        <HStack spacing={5} w="100%">
                            <BsWhatsapp />
                            <BsFacebook />
                            <BsInstagram />
                        </HStack>
                    </Box>
                    <Divider orientation='vertical' />
                    <Image src={footerLogo.src} w="10rem" borderRadius={'full'} alt="footer logo" />
                </HStack>
            </Container>
        </Box>
    )
}
export default Footer