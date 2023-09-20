import { Pagination } from "../../app/layout/Pagination/Pagination";
import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Link, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { SearchBox } from "../../app/layout/Header/SearchBox";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Header } from "../../app/layout/Header/Header";
import { format } from "date-fns";
import { Fragment, useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer(function ListOrders() {
  const { clientStore } = useStore();
  const { loadClients, clientRegistry, groupedClients } = clientStore;

  useEffect(() => {
    if (clientRegistry.size <= 1) loadClients();
  }, [loadClients, clientRegistry.size])

  if (clientStore.loadingInitial) return <LoadingComponent />

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="cyan.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading ml={4} size="lg" fontWeight="normal">Ordens</Heading>
            <SearchBox />
            <Button
              as={Link}
              href="/clients/createClient"
              style={{ textDecoration: 'none' }}
              size="sm"
              mr={4}
              fontSize="sm"
              colorScheme="cyan"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="blackAlpha" size="sm">
            <Thead>
              <Tr>
                <Th>Cliente</Th>
                <Th>Endereço</Th>
                <Th>Bairro</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            {groupedClients.map(([group, clients]) => (
              <Fragment key={group}>
                {clients && clients.map(client => (
                  <Tbody key={client.id}>
                    <Tr>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{client.fullName}</Text>
                          <Text fontSize="sm" color="cyan.300">{client.phone ?? client.mobile}</Text>
                        </Box>
                      </Td>
                      <Td>{client.street}</Td>
                      <Td>{client.neighborhood}</Td>
                      <Td>{format(client.createdAt!, 'dd MMM yyyy h:mm aa')}</Td>
                      <Td>
                        <Button
                          as={Link}
                          href={`clients/editClient/${client.id}`}
                          style={{ textDecoration: 'none' }}
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
              </Fragment>
            ))}
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
})