import { Flex, Button, Stack, Image, FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function SignIn() {

  return (
    <>
      <Flex w="100vw" h="100vh" direction="column" align="center" justify="center">
        <form>
          <Flex w="100%" maxWidth={360} bg="cyan.800" p="4" mb="4" borderRadius={8} justify="center">
            <Image src='logo.png' width="50%" alt='' />
          </Flex>
          <Flex w="100%" maxWidth={360} bg="cyan.800" p="8" borderRadius={8} flexDir="column">
            <Stack spacing="4">
              <FormControl>
                <FormLabel>Usuário</FormLabel>
                <Input
                  focusBorderColor="cyan.500"
                  bgColor="cyan.900"
                  variant="filled"
                  _hover={{ bgColor: "cyan.900" }}
                  size="lg"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input
                  focusBorderColor="cyan.500"
                  bgColor="cyan.900"
                  variant="filled"
                  _hover={{ bgColor: "cyan.900" }}
                  size="lg"
                  type="password"
                />
              </FormControl>
            </Stack>
            <Button type="submit" mt="6" colorScheme="cyan">Entrar</Button>
          </Flex>
        </form>
      </Flex >
    </>
  )
}
