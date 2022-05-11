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
  Stack
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

  // const { errors } = formState

  const handleFilterModal: SubmitHandler<FilterFormData> = async (values) => {
    handleFilter(
      Object.keys(values).map((key) => ({
        id: key,
        value: values[key as keyof FilterFormData]
      }))
    )
    // console.log(
    //   Object.keys(values).map((key) => ({
    //     id: key,
    //     value: values[key as keyof FilterFormData]
    //   }))
    // )
    handleClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Filtro</ModalHeader>
          <Box as="form" onSubmit={handleSubmit(handleFilterModal)}>
            <Flex direction="column">
              <ModalBody>
                <Stack direction="row">
                  <FormLabel>Número</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('number')}
                  />

                  <FormLabel>Fornecedor</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('provider')}
                  />
                </Stack>
                <Stack direction="row" mt={4}>
                  <FormLabel>Tags</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('tags')}
                  />

                  <FormLabel>Mês</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('month')}
                  />
                </Stack>
                <Stack direction="row" mt={4}>
                  <FormLabel>Observação</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('observation')}
                  />

                  <FormLabel>Entrega</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('delivery')}
                  />
                </Stack>
                <Stack direction="row" mt={4}>
                  <FormLabel>Status</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('status')}
                  />

                  <FormLabel>Comprado</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('bought')}
                  />
                </Stack>
                <Stack alignItems="center" mt={4}>
                  <FormLabel>Aprovado</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    placeholder="Digite..."
                    {...register('approved')}
                  />
                </Stack>
              </ModalBody>
            </Flex>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
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
