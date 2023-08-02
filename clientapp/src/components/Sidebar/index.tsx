import { Box, Stack, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { RiArticleLine, RiFileAddLine, RiFileUserLine, RiLineChartLine, RiPolaroid2Line } from "react-icons/ri";
import Link from 'next/link'

export function Sidebar() {
  return (
    <Box as="aside" w="64" ml="6">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/dashboard" passHref>
              <Icon as={RiLineChartLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </ChakraLink>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">ORDENS</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/order/create" passHref>
              <Icon as={RiFileAddLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Cadastro</Text>
            </ChakraLink>
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/order" passHref>
              <Icon as={RiArticleLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Consulta</Text>
            </ChakraLink>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">CLIENTES</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/client/create" passHref>
              <Icon as={RiFileUserLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Cadastro</Text>
            </ChakraLink>
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/client" passHref>
              <Icon as={RiArticleLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Consulta</Text>
            </ChakraLink>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">MÁQUINAS</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/equipment/create" passHref>
              <Icon as={RiPolaroid2Line} fontSize={20} />
              <Text ml="4" fontWeight="medium">Cadastro</Text>
            </ChakraLink>
            <ChakraLink as={Link} display="flex" alignItems="center" color="cyan.400" href="/equipment" passHref>
              <Icon as={RiArticleLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">Consulta</Text>
            </ChakraLink>
          </Stack>
        </Box>

      </Stack>
    </Box>
  )
}