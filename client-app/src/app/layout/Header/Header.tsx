import { Button, Flex, Icon, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "../Header/Profile";
import { RiLayoutTopLine } from "react-icons/ri";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Link href="/dashboard">
        <Image src='/logo.png' alt='' />
      </Link>
      <Flex flex={1} justifyContent="center" gap={40}>
        <Button
          as={Link}
          href="/clients"
          style={{ textDecoration: 'none' }}
          size="lg"
          fontSize="lg"
          colorScheme="cyan"
          leftIcon={<Icon as={RiLayoutTopLine} fontSize={20} />}
        >
          Clientes
        </Button>
        <Button
          size="lg"
          fontSize="lg"
          colorScheme="cyan"
          leftIcon={<Icon as={RiLayoutTopLine} fontSize={20} />}
        >
          Ordens
        </Button>
        <Button
          size="lg"
          fontSize="lg"
          colorScheme="cyan"
          leftIcon={<Icon as={RiLayoutTopLine} fontSize={20} />}
        >
          Máquinas
        </Button>
      </Flex>

      <Flex align="center" ml={["65%", "auto"]}>
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}