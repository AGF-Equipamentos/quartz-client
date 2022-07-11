import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Stack,
  Box,
  Divider
} from '@chakra-ui/react'
import { Filters } from 'react-table'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Input'
import { Dropdown } from 'components/Dropdown'
import Button from 'components/Button'
import { TagsInput } from 'components/TagsInput'
import { monthOptions } from 'utils/options/monthOptions'
import { optionsStatus } from 'utils/options/optionsStatus'

type FilterModalV2Props = {
  isOpen: boolean
  handleClose(): void
}

export type FilterFormDataV2 = {
  number: string
  provider: string
  tags: string
  month: number
  observation: string
  delivery: string
  status: string
  buyer: string
  approved: string
}

const schema = yup.object().shape({
  number: yup.string(),
  provider: yup.string(),
  tags: yup.string(),
  month: yup.number(),
  observation: yup.string(),
  delivery: yup.string(),
  status: yup.string(),
  buyer: yup.string(),
  apptoved: yup.string()
})

const FilterModalV2: React.FC<FilterModalV2Props> = ({
  isOpen,
  handleClose
}) => {
  const { setValue, reset } = useForm<FilterFormDataV2>({
    resolver: yupResolver(schema)
  })
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Filtro</ModalHeader>
          <Divider borderColor="gray.600" w="95%" />
          <Box as="form">
            <ModalBody>
              <Stack direction="row" justifyContent="space-evenly">
                <Box w="50%">
                  <Input
                    label="Número"
                    focusBorderColor="yellow.500"
                    size="sm"
                    name="number"
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Fornecedor"
                    focusBorderColor="yellow.500"
                    size="sm"
                    name="provider"
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="100%">
                  <TagsInput
                    // initialTags={
                    //   // getValues('tags') ? getValues('tags')?.split(';')
                    // }
                    setValue={setValue}
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="50%">
                  <Input
                    label="Observação"
                    focusBorderColor="yellow.500"
                    size="sm"
                    name="observation"
                  />
                </Box>
                <Box w="50%">
                  <Dropdown
                    label="Mês"
                    size="sm"
                    items={monthOptions}
                    name="month"
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
                    name="approved"
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Entrega"
                    type="date"
                    size="sm"
                    name="delivery"
                  />
                </Box>
              </Stack>
              <Stack direction="row" mt={4} justifyContent="space-evenly">
                <Box w="50%">
                  <Dropdown
                    placeholder="Selecione uma opção"
                    label="Status"
                    items={optionsStatus}
                    name="status"
                  />
                </Box>
                <Box w="50%">
                  <Input
                    label="Comprador"
                    focusBorderColor="yellow.500"
                    size="sm"
                    name="buyer"
                  />
                </Box>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                // colorScheme="gray.500"
                bgColor="gray.600"
                mr={3}
                text="Cancelar"
                onClick={handleClose}
              />
              <Button
                bgColor="gray.500"
                text="Limpar"
                mr={3}
                onClick={() => reset()}
              />
              <Button type="button" text="Filtrar" colorScheme="yellow" />
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
export default FilterModalV2
