import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack, FormControl, Input, FormLabel, Link } from "@chakra-ui/react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Client } from "../../app/models/client";
import { Header } from "../../app/layout/Header/Header";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'

export default observer(function FormClient() {
  const { clientStore } = useStore()
  const { updateClient, createClient, loading, loadClient, loadingInitial } = clientStore
  const { id } = useParams()
  const navigate = useNavigate()

  const [client, setClient] = useState<Client>({
    id: '',
    fullName: '',
    street: '',
    city: '',
    neighborhood: '',
    uf: '',
    details: '',
    phone: '',
    mobile: '',
    createdAt: null
  })

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Nome é obrigatório')
  })

  useEffect(() => {
    if (id) loadClient(id).then(client => setClient(client!))
  }, [id, loadClient])

  function handleFormSubmit(client: Client) {
    if (client.id.length === 0) {
      const newClient = {
        ...client,
      }
      createClient(newClient).then(() => navigate('/clients'))
    } else {
      updateClient(client).then(() => navigate('/clients'))
    }
  }

  if (loadingInitial) return <LoadingComponent />

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="cyan.800" p="8">
          {client.id ? <Heading size="lg" fontWeight="normal">Editar Cliente</Heading> : <Heading size="lg" fontWeight="normal">Novo Cliente</Heading>}

          <Divider my="6" borderColor="cyan.700" />

          <Formik validationSchema={validationSchema} enableReinitialize initialValues={client} onSubmit={values => handleFormSubmit(values)}>
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} autoComplete="off">
                <VStack spacing="4">
                  <SimpleGrid minChildWidth="240px" w="100%">
                    <FormControl>
                      <FormLabel>Nome</FormLabel>
                      <Field
                        as={Input}
                        name="fullName"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid minChildWidth="240px" w="100%">
                    <FormControl>
                      <FormLabel>Endereço</FormLabel>
                      <Field
                        as={Input}
                        name="street"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <FormControl>
                      <FormLabel>Cidade</FormLabel>
                      <Field
                        as={Input}
                        name="city"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Bairro</FormLabel>
                      <Field
                        as={Input}
                        name="neighborhood"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>UF</FormLabel>
                      <Field
                        as={Input}
                        name="uf"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>

                  </SimpleGrid>

                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <FormControl>
                      <FormLabel>Telefone</FormLabel>
                      <Field
                        as={Input}
                        name="phone"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Celular</FormLabel>
                      <Field
                        as={Input}
                        name="mobile"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                    <FormControl>
                      <FormLabel>Detalhes</FormLabel>
                      <Field
                        as={Input}
                        name="details"
                        focusBorderColor="cyan.500"
                        bgColor="cyan.900"
                        variant="filled"
                        _hover={{ bgColor: "cyan.900" }}
                        size="lg"
                      />
                    </FormControl>
                  </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                  <HStack spacing="4">
                    <Button as={Link} href="/clients" style={{ textDecoration: 'none' }} colorScheme="whiteAlpha">Cancelar</Button>
                    <Button isLoading={loading} type="submit" colorScheme="cyan">Salvar</Button>
                  </HStack>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  )
})