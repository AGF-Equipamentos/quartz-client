import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Stack
} from '@chakra-ui/react'

import { Filters } from 'react-table'
import { Box } from '@chakra-ui/react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Input'
import { Dropdown } from 'components/Dropdown'

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
  delivery: Date
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

const OptionsMonth = [
  {
    label: 'Janeiro',
    value: 1
  },
  {
    label: 'Fevereiro',
    value: 2
  },
  {
    label: 'Março',
    value: 3
  },
  {
    label: 'Abril',
    value: 4
  },
  {
    label: 'Maio',
    value: 5
  },
  {
    label: 'Junho',
    value: 6
  },
  {
    label: 'Julho',
    value: 7
  },
  {
    label: 'Agosto',
    value: 8
  },
  {
    label: 'Setembro',
    value: 9
  },
  {
    label: 'Outubro',
    value: 10
  },
  {
    label: 'Novembro',
    value: 11
  },
  {
    label: 'Dezembro',
    value: 12
  }
]

const OptionsStatus = [
  {
    label: 'Aguardando aprovação',
    value: 0
  },
  {
    label: 'Aguardando envio fornecedor',
    value: 1
  },
  {
    label: 'Aguardando confirmação',
    value: 2
  },
  {
    label: 'Confirmado',
    value: 3
  },
  {
    label: 'Atrassado',
    value: 4
  }
]

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
    console.log(values)

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
                <Box w="40%">
                  <Input
                    label="Número"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('number')}
                  />
                </Box>
                <Box w="40%">
                  <Input
                    label="Fornecedor"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('provider')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="40%">
                  <Input
                    label="Tags"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('tags')}
                  />
                </Box>
                <Box w="40%">
                  <Dropdown
                    label="Mês"
                    focusBorderColor="yellow.500"
                    size="sm"
                    placeholder="Selecione uma opção"
                    items={OptionsMonth}
                    {...register('month')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="40%">
                  <Dropdown
                    placeholder="Selecione uma opção"
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
                  />
                </Box>
                <Box w="40%">
                  <Input
                    label="Entrega"
                    type="date"
                    size="sm"
                    {...register('delivery')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="40%">
                  <Dropdown
                    placeholder="Selecione uma opção"
                    label="Status"
                    focusBorderColor="yellow.500"
                    size="sm"
                    items={OptionsStatus}
                    {...register('status')}
                  />
                </Box>
                <Box w="40%">
                  <Input
                    label="Comprador"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('bought')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="40%">
                  <Input
                    label="Observação"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('observation')}
                  />
                </Box>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button bg="gray.500" mr={3} onClick={handleClose}>
                Fechar{' '}
              </Button>

              <Button
                type="submit"
                colorScheme="yellow"
                isLoading={formState.isSubmitting}
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
