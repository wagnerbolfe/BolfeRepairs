import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useStore } from "../../stores/store";


export function Profile() {
  const { userStore: { isLoggedIn, user, logout } } = useStore()

  return (
    <Flex align="center">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          size="lg"
          fontSize="lg"
          colorScheme="cyan"
        >
          {isLoggedIn &&
            <Flex flexDirection="row" gap={2} justify="center" align="center">
              <Avatar size="sm" name="Wagner Bolfe" src="https://github.com/wagnerbolfe.png" />
              <Text>{user?.displayName}</Text>
            </Flex>
          }
        </MenuButton>
        <MenuList bgColor={"cyan.50"}>
          <MenuItem onClick={logout} bgColor={"cyan.50"} color={"cyan.900"}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>

  )
}