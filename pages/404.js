import { Container, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container mt={10} border={'1px solid #0a0a0a22'} p={14} boxShadow="md" borderRadius='xl'>
            <Heading fontSize={'3em'} color="pink.200">התוכן שביקשת לא נמצא... 🤔</Heading>
            <Text mt={3}>אבל דברים טעימים יש לנו בשפע! כדאי לחזור לדף הבית ולמצוא לך משהו טעים לנשנש! 💗</Text>
        </Container >
    )
}

export default NotFound