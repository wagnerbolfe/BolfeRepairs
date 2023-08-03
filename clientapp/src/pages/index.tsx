import { Flex, Button, Stack, Image, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Head from 'next/head'
import { useForm } from "react-hook-form"

export default function SignIn() {
  const { handleSubmit, register } = useForm()

  function handlePreRegister(data: any) {
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Bolfe Consertos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" h="100vh" direction="column" align="center" justify="center">
        <form onSubmit={handleSubmit(handlePreRegister)}>
          <Flex w="100%" maxWidth={360} bg="gray.800" p="4" mb="4" borderRadius={8} flexDir="column">
            <Image src='logo.png' alt='' />
          </Flex>
          <Flex w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
            <Stack spacing="4">
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  focusBorderColor="cyan.500"
                  bgColor="gray.900"
                  variant="filled"
                  _hover={{ bgColor: "gray.900" }}
                  size="lg"
                  type="email"
                  {...register('email')}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input
                  focusBorderColor="cyan.500"
                  bgColor="gray.900"
                  variant="filled"
                  _hover={{ bgColor: "gray.900" }}
                  size="lg"
                  type="password"
                  {...register('password')}
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
