import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import agent from "../api/agent";
import { Client } from "../models/client";

export default function ClientList() {
  const [clients, setClients] = useState<Client[]>([])
  const [selectedClient, setSelectedClient] = useState<Client | undefined>(undefined)

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
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Clientes</Heading>
            <Button
              as={Link}
              href="/client/create" passHref
              size="sm"
              fontSize="sm"
              colorScheme="cyan"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Cliente</Th>
                <Th>Endereço</Th>
                <Th>N</Th>
                <Th>Bairro</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            {clients.map(client => (
              <Tbody key={client.id}>
                <Tr>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{client.name}</Text>
                      <Text fontSize="sm" color="gray.300">{client.phone ?? client.mobile}</Text>
                    </Box>
                  </Td>
                  <Td>{client.street}</Td>
                  <Td>{client.houseNumber}</Td>
                  <Td>{client.neighborhood}</Td>
                  <Td>{client.createdAt.toString()}</Td>
                  <Td>
                    <Button
                      as={Link}
                      href={`/client/edit/${client.id}`}
                      size="sm"
                      fontSize="sm"
                      colorScheme="cyan"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            ))}

          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}