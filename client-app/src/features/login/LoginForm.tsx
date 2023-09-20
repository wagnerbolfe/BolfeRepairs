import { Flex, Button, Stack, Image, FormControl, FormLabel, Input, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { Field, Form, Formik } from "formik"
import { observer } from "mobx-react"
import { useStore } from "../../app/stores/store"

export default observer(function LoginForm() {
  const { userStore } = useStore()

  return (
    <>
      <Flex w="100vw" h="100vh" direction="column" align="center" justify="center">
        <Formik initialValues={{ username: '', password: '', error: null }}
          onSubmit={(values, { setErrors }) => userStore.login(values).catch(() => setErrors({ error: 'Usuário ou senha inválidos' }))}>
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Flex w="100%" maxWidth={360} bg="cyan.800" p="4" mb="4" borderRadius={8} justify="center">
                <Image src='logo.png' width="50%" alt='' />
              </Flex>
              <Flex w="100%" maxWidth={360} bg="cyan.800" p="8" borderRadius={8} flexDir="column">
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel>Usuário</FormLabel>
                    <Field
                      as={Input}
                      name="username"
                      focusBorderColor="cyan.500"
                      bgColor="cyan.900"
                      variant="filled"
                      _hover={{ bgColor: "cyan.900" }}
                      size="lg"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Senha</FormLabel>
                    <Field
                      as={Input}
                      name="password"
                      focusBorderColor="cyan.500"
                      bgColor="cyan.900"
                      variant="filled"
                      _hover={{ bgColor: "cyan.900" }}
                      size="lg"
                      type="password"
                    />
                  </FormControl>
                </Stack>

                <Button isLoading={isSubmitting} type="submit" mt="6" colorScheme="cyan">Entrar</Button>

                {errors.error &&
                  <Alert mt="6" variant="solid" status='warning' borderRadius="md">
                    <AlertIcon fontSize="sm" />
                    <AlertTitle fontSize="sm">{errors.error}</AlertTitle>
                  </Alert>}
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex >
    </>
  )
})
