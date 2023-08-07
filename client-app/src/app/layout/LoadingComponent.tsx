import { Flex, Spinner, Text } from "@chakra-ui/react"

export default function LoadingComponent() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        thickness='5px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      ></Spinner>
      <Text pt={2} pl={2}>Loading...</Text>
    </Flex>
  )
}