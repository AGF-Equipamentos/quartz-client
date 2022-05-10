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
  Button
} from '@chakra-ui/react'

import { Filters } from 'react-table'
// import { Box } from '@chakra-ui/react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'

type FilterModalProps = {
  isOpen: boolean
  handleClose(): void
  handleFilter: (
    updater: Filters<object> | ((filters: Filters<object>) => Filters<object>)
  ) => void
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

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  handleClose,
  handleFilter
}) => {
  const FilterUserFormSchema = yup.object().shape({
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

  // const { register, handleSubmit, formState } = useForm<FilterModalProps>({
  //   resolver: yupResolver(FilterUserFormSchema)
  // })

  const handleFilterModal: SubmitHandler<FilterModalProps> = async (value) => {
    handleFilter(
      Object.keys(value).map((key) => ({
        id: key,
        value: value[key as keyof FilterModalProps]
      }))
    )
  }
  return (
    <>
      <Flex justifyContent="space-between">
        <Modal isOpen={isOpen} onClose={handleClose} size="lg">
          <ModalOverlay />
          <ModalContent bg="gray.900">
            <ModalHeader>Filtro</ModalHeader>
            <ModalBody>
              {/* <Box as="form" onSubmit={handleSubmit(handleFilterModal)}> */}
              <FormLabel>Número</FormLabel>
              <Input
                // type="number"
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('number')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Fornecedor</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('provider')}
                //onChange={(e) => setFilterProvider(e.target.value)}
              />

              <FormLabel mt={4}>Tags</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('tags')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Mês</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('month')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Observação</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('observation')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Entrega</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('delivery')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Status</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('status')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Comprado</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('bought')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Aprovado</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                //{...register('approved')}
                // onChange={(e) => setFilterModal(e.target.value)}
              />
              {/* </Box> */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Fechar{' '}
              </Button>

              <Button
                colorScheme="yellow"
                //isLoading={formState.isSubmitting}
                type="submit"
              >
                Filtrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  )
}
export default FilterModal
