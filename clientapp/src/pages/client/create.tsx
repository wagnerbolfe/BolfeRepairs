
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack, Checkbox, FormControl, Input, FormLabel, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const claimClientFormSchema = z.object({
  name: z.string(),
  street: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  uf: z.string().max(2, { message: '* O estado precisa de duas letras' }).transform(uf => uf.toUpperCase()),
  phone: z.string().regex(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, 'Digite um telefone válido'),
  mobile: z.string().regex(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, 'Digite um celular válido'),
  details: z.string(),
  situation: z.boolean()
})

type ClaimClientFormData = z.infer<typeof claimClientFormSchema>

export default function CreateClient() {
  const { handleSubmit, register, formState: { errors } } = useForm<ClaimClientFormData>({
    resolver: zodResolver(claimClientFormSchema)
  })

  async function handlePreRegister(data: ClaimClientFormData) {
    console.log(data)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Adicionar Cliente</Heading>

          <Divider my="6" borderColor="gray.700" />

          <form onSubmit={handleSubmit(handlePreRegister)}>
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('name')}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <FormControl>
                  <FormLabel>Endereço</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('street')}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <FormControl>
                  <FormLabel>Cidade</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('city')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Bairro</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('neighborhood')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>UF</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('uf')}
                  />
                  <Text p={2} fontSize="xs">{errors.uf && errors.uf.message}</Text>
                </FormControl>

              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <FormControl>
                  <FormLabel>Telefone</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    type="number"
                    {...register('phone')}
                  />
                  <Text p={2} fontSize="xs">{errors.phone && errors.phone.message}</Text>
                </FormControl>

                <FormControl>
                  <FormLabel>Celular</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    type="number"
                    {...register('mobile')}
                  />
                  <Text p={2} fontSize="xs">{errors.mobile && errors.mobile.message}</Text>
                </FormControl>
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <FormControl>
                  <FormLabel>Detalhes</FormLabel>
                  <Input
                    focusBorderColor="cyan.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{ bgColor: "gray.900" }}
                    size="lg"
                    {...register('details')}
                  />
                </FormControl>
                <Checkbox
                  display="flex"
                  justifyContent="center"
                  pt={8}
                  size="lg"
                  gap="2"
                  defaultChecked
                  {...register('situation')}
                >
                  Usuário Ativo?
                </Checkbox>
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button as={Link} colorScheme="whiteAlpha" href="/client" passHref>Cancelar</Button>
                <Button type="submit" colorScheme="cyan">Salvar</Button>
              </HStack>
            </Flex>
          </form>

        </Box>
      </Flex>
    </Box>
  )
}