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
import { useState } from 'react'

type FilterModalProps = {
  isOpen: boolean
  handleClose(): void
  // setAllFilters: any
  handleFilter: any
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  handleClose,
  // setAllFilters
  handleFilter
}) => {
  const [filterModal, setFilterModal] = useState('')

  const handleFilterModal = (e) => {
    const value = e.target.value || undefined

    handleFilter(
      { id: 'number', value: value },
      { id: 'procider', value: value }
      // { id: 'tags', value: value },
      // { id: 'month', value: value },
      // { id: 'observation', value: value },
      // { id: 'delivery', value: value },
      // { id: 'status', value: value },
      // { id: 'bought', value: value },
      // { id: 'approved', value: value }
    )
    setFilterModal(value)
  }
  return (
    <>
      <Flex justifyContent="space-between">
        <Modal isOpen={isOpen} onClose={handleClose} size="lg">
          <ModalOverlay />
          <ModalContent bg="gray.900">
            <ModalHeader>Filtro</ModalHeader>
            <ModalBody>
              <FormLabel>Número</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                // value={filterModal}
                // onChange={handleFilterModal}
                onChange={(e) => handleFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Fornecedor</FormLabel>
              <Input
                size="sm"
                variant="outline"
                placeholder="Digite..."
                // value={filterModal}
                // onChange={handleFilterModal}
                onChange={(e) => handleFilterModal(e.target.value)}
              />

              <FormLabel mt={4}>Tags</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Mês</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Observação</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Entrega</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Status</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Comprado</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Aprovado</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Fechar{' '}
              </Button>

              <Button colorScheme="yellow" onClick={handleFilterModal}>
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
