import { Input } from '@/components/Form/Input'
import { Flex, Button, Stack, Image } from '@chakra-ui/react'
import Head from 'next/head'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Bolfe Consertos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" h="100vh" direction="column" align="center" justify="center">
        <Flex w="100%" maxWidth={360} bg="gray.800" p="4" mb="4" borderRadius={8} flexDir="column">
          <Image src='logo.png' alt='' />
        </Flex>
        <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
          <Stack spacing="4">
            <Input name='email' type='email' label='E-Mail' />
            <Input name='password' type='password' label='Senha' />
          </Stack>
          <Button type="submit" mt="6" colorScheme="cyan">Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}
