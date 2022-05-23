import { Box, Divider, Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import { Input } from 'components/Input'
import { Dropdown } from 'components/Dropdown'
import Button from 'components/Button'
// import { SubmitHandler, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import mock from 'components/Edit/mock'

// type EditFormData = {
//   tags: string
//   status: string
//   observation: string
// }
const OptionsStatus = [
  {
    label: 'Aguardando envio ao fornecedor',
    value: 0
  },
  {
    label: 'Aguardando confirmação',
    value: 1
  },
  {
    label: 'Confirmado',
    value: 2
  }
]

// const schema = yup.object().shape({
//   tags: yup.string(),
//   status: yup.string(),
//   observation: yup.string()
// })

// const { register, handleSubmit, formState } = useForm<EditFormData>({
//   resolver: yupResolver(schema)
// })

const Edit = () => (
  <Box as="form">
    <Heading size="lg"> Editar </Heading>
    <Divider my="6" borderColor="gray.600" />
    <Stack spacing={3}>
      <Input name="tags" label="Tags" size="sm" />
      <Dropdown
        name="status"
        label="Status"
        items={OptionsStatus}
        placeholder="Selecione uma opção"
        size="sm"
      />
      <Input name="observation" label="Observação" size="sm" />
    </Stack>
    <Flex mt="8" justify="flex-end">
      <HStack spacing="4">
        <Button text="Cancelar" bg="gray.500" />
        <Button text="Salvar" colorScheme="yellow" />
      </HStack>
    </Flex>
  </Box>
)
export default Edit
