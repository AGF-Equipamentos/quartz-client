import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Stack
} from '@chakra-ui/react'

import { Filters } from 'react-table'
import { Box } from '@chakra-ui/react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Input'
import { Dropdown } from 'components/Dropdown'
import Button from 'components/Button'
import { TagsInput } from 'components/TagsInput'
import { monthOptions } from 'utils/options/monthOptions'

type FilterModalProps = {
  isOpen: boolean
  handleClose(): void
  handleFilter: (
    updater: Filters<object> | ((filters: Filters<object>) => Filters<object>)
  ) => void
}

export type FilterFormData = {
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

const OptionsStatus = [
  {
    label: 'Aguardando aprovação',
    value: 'Aguardando aprovação'
  },
  {
    label: 'Aguardando envio ao fornecedor',
    value: 'Aguardando envio ao fornecedor'
  },
  {
    label: 'Aguardando confirmação',
    value: 'Aguardando confirmação'
  },
  {
    label: 'Confirmado',
    value: 'Confirmado'
  },
  {
    label: 'Atrasado',
    value: 'Atrasado'
  }
]

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  handleClose,
  handleFilter
}) => {
  const { register, handleSubmit, formState, setValue, getValues } =
    useForm<FilterFormData>({
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
    // console.log(values)

    handleClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Filtro</ModalHeader>
          <Box as="form">
            <ModalBody>
              <Stack direction="row" justifyContent="space-evenly">
                <Box w="50%">
                  <Input
                    label="Número"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('number')}
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Fornecedor"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('provider')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="100%">
                  <TagsInput
                    initialTags={
                      getValues('tags') ? getValues('tags')?.split(';') : []
                    }
                    setValue={setValue}
                    {...register('tags')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="50%">
                  <Input
                    label="Observação"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('observation')}
                  />
                </Box>
                <Box w="50%">
                  <Dropdown
                    label="Mês"
                    size="sm"
                    placeholder="Selecione uma opção"
                    items={monthOptions}
                    {...register('month')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="50%">
                  <Dropdown
                    placeholder="Selecione uma opção"
                    label="Aprovado"
                    size="sm"
                    items={[
                      {
                        label: 'Sim',
                        value: 'Sim'
                      },
                      {
                        label: 'Não',
                        value: 'Não'
                      }
                    ]}
                    {...register('approved')}
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Entrega"
                    type="date"
                    size="sm"
                    {...register('delivery')}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="50%">
                  <Dropdown
                    placeholder="Selecione uma opção"
                    label="Status"
                    size="sm"
                    items={OptionsStatus}
                    {...register('status')}
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Comprador"
                    focusBorderColor="yellow.500"
                    size="sm"
                    {...register('bought')}
                  />
                </Box>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                bg="gray.500"
                mr={3}
                text="Fechar "
                onClick={handleClose}
              />

              <Button
                type="button"
                text="Filtrar"
                colorScheme="yellow"
                isLoading={formState.isSubmitting}
                onClick={handleSubmit(handleFilterModal)}
              />
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
export default FilterModal
