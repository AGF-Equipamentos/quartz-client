import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormLabel,
  ModalFooter,
  Button,
  Stack,
  Select
} from '@chakra-ui/react'

import { Filters } from 'react-table'
import { Box } from '@chakra-ui/react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'

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
            <ModalBody>
              <Stack direction="row" justifyContent="space-evenly">
                <Input
                  label="Número"
                  focusBorderColor="yellow.500"
                  size="sm"
                  variant="outline"
                  placeholder="Digite..."
                  {...register('number')}
                />
                <Input
                  label="Fornecedor"
                  focusBorderColor="yellow.500"
                  size="sm"
                  variant="outline"
                  placeholder="Digite..."
                  {...register('provider')}
                />
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Input
                  label="Tags"
                  focusBorderColor="yellow.500"
                  size="sm"
                  variant="outline"
                  placeholder="Digite..."
                  {...register('tags')}
                />
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
                    <option value="março" style={{ backgroundColor: 'black' }}>
                      Março
                    </option>
                    <option value="abril" style={{ backgroundColor: 'black' }}>
                      Abril
                    </option>
                    <option value="maio" style={{ backgroundColor: 'black' }}>
                      Maio
                    </option>
                    <option value="junho" style={{ backgroundColor: 'black' }}>
                      Junho
                    </option>
                    <option value="julho" style={{ backgroundColor: 'black' }}>
                      Julho
                    </option>
                    <option value="agosto" style={{ backgroundColor: 'black' }}>
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

                  {/* <Dropdown
                    {...register('month')}
                    label="Mês"
                    focusBorderColor="yellow.500"
                    size="sm"
                    items={[
                      {
                        label: 'Janeiro',
                        value: 0
                      },
                      {
                        label: 'Fevereiro',
                        value: 1
                      },
                      {
                        label: 'Março',
                        value: 2
                      },
                      {
                        label: 'Abril',
                        value: 3
                      },
                      {
                        label: 'Maio',
                        value: 4
                      },
                      {
                        label: 'Junho',
                        value: 5
                      },
                      {
                        label: 'Julho',
                        value: 6
                      },
                      {
                        label: 'Agosto',
                        value: 7
                      }

                    ]}
                  /> */}
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="40%">
                  {/* <Dropdown
                    label="Aprovado"
                    focusBorderColor="yellow.500"
                    size="sm"
                    items={[
                      {
                        label: 'Sim',
                        value: 0
                      },
                      {
                        label: 'Não',
                        value: 1
                      }
                    ]}
                    {...register('approved')}
                  /> */}
                </Box>
                <Box w="40%">
                  <Input
                    label="Entrega"
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
                    {/* <option
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
                    </option> */}
                  </Select>
                </Box>
                <Input
                  label="Comprador"
                  focusBorderColor="yellow.500"
                  placeholder="Digite..."
                  size="sm"
                  variant="outline"
                  {...register('bought')}
                />
              </Stack>
              <Stack direction="row" justifyContent="space-evenly">
                <Input
                  label="Observação"
                  focusBorderColor="yellow.500"
                  size="sm"
                  variant="outline"
                  placeholder="Digite..."
                  {...register('observation')}
                />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button bg="gray.500" mr={3} onClick={handleClose}>
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
