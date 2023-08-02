import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import agent from "../api/agent";

export default function ClientList() {
  const [clients, setClients] = useState([])

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
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="cyan" />
                </Th>
                <Th>Cliente</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="cyan" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wagner Bolfe</Text>
                    <Text fontSize="sm" color="gray.300">shaper@live.com</Text>
                  </Box>
                </Td>
                <Td>24 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
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

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="cyan" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wagner Bolfe</Text>
                    <Text fontSize="sm" color="gray.300">shaper@live.com</Text>
                  </Box>
                </Td>
                <Td>24 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
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

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="cyan" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Wagner Bolfe</Text>
                    <Text fontSize="sm" color="gray.300">shaper@live.com</Text>
                  </Box>
                </Td>
                <Td>24 de Abril de 2021</Td>
                <Td>
                  <Button
                    as="a"
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
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}