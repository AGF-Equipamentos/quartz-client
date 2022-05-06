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

const FilterModal = ({ isOpen, handleClose }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Modal isOpen={isOpen} onClose={handleClose} size="lg">
          <ModalOverlay />
          <ModalContent bg="gray.900">
            <ModalHeader>Filtro</ModalHeader>
            <ModalBody>
              <FormLabel>Número</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

              <FormLabel mt={4}>Fornecedor</FormLabel>
              <Input size="sm" variant="outline" placeholder="Digite..." />

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

              <Button colorScheme="yellow">Filtrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  )
}
export default FilterModal
