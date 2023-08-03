import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import agent from "../api/agent";
import { Client } from "../models/client";

export default function EditClient() {
  const [clients, setClients] = useState<Client>()

  useEffect(() => {
    agent.Clients.list().then(response => {
      setClients(response)
    })
  }, [])

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Editar Cliente</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="contact" label="Contato" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="street" label="Endereço" />
              <Input name="number" label="Numero" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="city" label="Cidade" />
              <Input name="uf" label="Estado" />
              <Input name="neighborhood" label="Bairro" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="phone" label="Telefone" />
              <Input name="mobile" label="Celular" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="details" label="Detalhes" />
              <Input name="createdAt" label="Criado" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button as={Link} colorScheme="whiteAlpha" href="/client" passHref>Cancelar</Button>
              <Button colorScheme="cyan">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}