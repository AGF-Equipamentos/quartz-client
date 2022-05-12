import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Stack,
  Select,
  VStack
} from '@chakra-ui/react'

import { Filters } from 'react-table'
import { Box } from '@chakra-ui/react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type FilterModalProps = {
  isOpen: boolean
  handleClose(): void
  handleFilter: (
    updater: Filters<object> | ((filters: Filters<object>) => Filters<object>)
  ) => void
}

type FilterFormData = {
  number: string
  provider: string
  tags: string
  month: string
  observation: string
  delivery: string
  status: string
  bought: string
  approved: string
}

const schema = yup.object().shape({
  number: yup.string(),
  provider: yup.string(),
  tags: yup.string(),
  month: yup.string(),
  observation: yup.string(),
  delivery: yup.string(),
  status: yup.string(),
  bought: yup.string(),
  approved: yup.string()
})

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  handleClose,
  handleFilter
}) => {
  const { register, handleSubmit, formState } = useForm<FilterFormData>({
    resolver: yupResolver(schema)
  })

  //const { errors } = formState

  const handleFilterModal: SubmitHandler<FilterFormData> = async (values) => {
    handleFilter(
      Object.keys(values).map((key) => ({
        id: key,
        value: values[key as keyof FilterFormData]
      }))
    )

    handleClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Filtro</ModalHeader>
          <Box as="form" onSubmit={handleSubmit(handleFilterModal)}>
            <Flex direction="row" justifyContent="space-evenly">
              <ModalBody>
                <Stack direction="row" justifyContent="space-evenly">
                  <Box>
                    <FormLabel>Número</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      size="sm"
                      variant="outline"
                      placeholder="Digite..."
                      {...register('number')}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Fornecedor</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      size="sm"
                      variant="outline"
                      placeholder="Digite..."
                      {...register('provider')}
                    />
                  </Box>
                </Stack>
                <Stack direction="row" mt={4} justifyContent="space-evenly">
                  <Box>
                    <FormLabel>Tags</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      size="sm"
                      variant="outline"
                      placeholder="Digite..."
                      {...register('tags')}
                    />
                  </Box>
                  <Box w="40%">
                    <FormLabel>Mês</FormLabel>
                    <Select
                      {...register('month')}
                      size="sm"
                      focusBorderColor="yellow.500"
                    >
                      <option
                        style={{ backgroundColor: 'black' }}
                        value="janeiro"
                      >
                        Janeiro
                      </option>
                      <option
                        style={{ backgroundColor: 'black' }}
                        value="fevereiro"
                      >
                        Fevereiro
                      </option>
                      <option
                        value="março"
                        style={{ backgroundColor: 'black' }}
                      >
                        Março
                      </option>
                      <option
                        value="abril"
                        style={{ backgroundColor: 'black' }}
                      >
                        Abril
                      </option>
                      <option value="maio" style={{ backgroundColor: 'black' }}>
                        Maio
                      </option>
                      <option
                        value="junho"
                        style={{ backgroundColor: 'black' }}
                      >
                        Junho
                      </option>
                      <option
                        value="julho"
                        style={{ backgroundColor: 'black' }}
                      >
                        Julho
                      </option>
                      <option
                        value="agosto"
                        style={{ backgroundColor: 'black' }}
                      >
                        Agosto
                      </option>
                      <option
                        value="setembro"
                        style={{ backgroundColor: 'black' }}
                      >
                        Setembro
                      </option>
                      <option
                        value="outubro"
                        style={{ backgroundColor: 'black' }}
                      >
                        Outubro
                      </option>
                      <option
                        value="novembro"
                        style={{ backgroundColor: 'black' }}
                      >
                        Novembro
                      </option>
                      <option
                        value="dezembro"
                        style={{ backgroundColor: 'black' }}
                      >
                        Dezembro
                      </option>
                    </Select>
                  </Box>
                </Stack>
                <Stack direction="row" mt={4} justifyContent="space-evenly">
                  <Box w="40%">
                    <FormLabel>Aprovado</FormLabel>
                    <Select
                      focusBorderColor="yellow.500"
                      size="sm"
                      {...register('approved')}
                    >
                      <option value="sim" style={{ backgroundColor: 'black ' }}>
                        Sim
                      </option>
                      <option value="não" style={{ backgroundColor: 'black' }}>
                        Não
                      </option>
                    </Select>
                  </Box>
                  <Box w="40%">
                    <FormLabel>Entrega</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      type="date"
                      size="sm"
                      variant="outline"
                      placeholder="Digite..."
                      {...register('delivery')}
                    />
                  </Box>
                </Stack>
                <Stack direction="row" mt={4} justifyContent="space-evenly">
                  <Box w="40%">
                    <FormLabel>Status</FormLabel>
                    <Select
                      focusBorderColor="yellow.500"
                      size="sm"
                      {...register('status')}
                    >
                      <option
                        value="Aguardando aprovação"
                        style={{ backgroundColor: 'black' }}
                      >
                        Aguardando aprovação
                      </option>
                      <option
                        value="Aguardando envio do fornecedor "
                        style={{ backgroundColor: 'black' }}
                      >
                        Aguardando o envio do fornecedor
                      </option>
                      <option
                        value=" Aguardando confirmação"
                        style={{ backgroundColor: 'black' }}
                      >
                        Aguardando confirmação
                      </option>
                      <option
                        value="Confirmado"
                        style={{ backgroundColor: 'black' }}
                      >
                        Confirmado
                      </option>
                      <option
                        value="Atrassado"
                        style={{ backgroundColor: 'black' }}
                      >
                        Atrassado
                      </option>
                    </Select>
                  </Box>
                  <Box>
                    <FormLabel>Comprado</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      placeholder="Digite..."
                      size="sm"
                      variant="outline"
                      {...register('bought')}
                    />
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  mt={4}
                  justifyContent="flex-start"
                  // padding={2}
                >
                  <Box>
                    <FormLabel>Observação</FormLabel>
                    <Input
                      focusBorderColor="yellow.500"
                      size="sm"
                      variant="outline"
                      placeholder="Digite..."
                      {...register('observation')}
                    />
                  </Box>
                </Stack>
              </ModalBody>
            </Flex>
            <ModalFooter>
              <Button bg="#718096" mr={3} onClick={handleClose}>
                Fechar{' '}
              </Button>

              <Button
                colorScheme="yellow"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Filtrar
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
export default FilterModal
