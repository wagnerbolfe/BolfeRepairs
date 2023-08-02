import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

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
      <Image src='/logo.png' width={["56", "64"]} ml={["0", "3"]} alt='' mt="2" />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml={["65%", "auto"]}>
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}