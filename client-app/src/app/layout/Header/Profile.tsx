import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wagner Bolfe</Text>
          <Text color="cyan.300" fontSize="small">
            shaper@live.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Wagner Bolfe" src="https://github.com/wagnerbolfe.png" />
    </Flex>
  )
}