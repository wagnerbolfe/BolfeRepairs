import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="3"
      maxWidth={568}
      alignSelf="center"
      color="cyan.200"
      position="relative"
      bg="cyan.800"
      borderRadius="md"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        placeholder="Buscar"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon marginTop="2px" as={RiSearchLine} fontSize={20} />
    </Flex>
  )
}