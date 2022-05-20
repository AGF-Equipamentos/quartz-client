import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from '@chakra-ui/react'

import { Input } from 'components/Input'
import { Dropdown } from 'components/Dropdown'

type EditProps = {
  isOpen: boolean
  handleClose(): void
}

// type EditData = {
//   tags: string
//   status: string
//   observation: string
// }

const OptionsStatus = [
  {
    label: 'Aguardando aprovação',
    value: 0
  },
  {
    label: 'Aguardando endio fornecedor',
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

const EditModal: React.FC<EditProps> = ({ isOpen, handleClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <ModalHeader>Editar</ModalHeader>
          <ModalBody>
            <Input label="Tags" focusBorderColor="yellow.500" size="sm" />
            <Dropdown
              label="Status"
              focusBorderColor="yellow.500"
              size="sm"
              placeholder="Selecione uma opção "
              items={OptionsStatus}
            />
            <Input label="Observação" focusBorderColor="yellow.500" size="sm" />
          </ModalBody>

          <ModalFooter>
            <Button bg="gray.500" onClick={handleClose}>
              Fechar
            </Button>
            <Button colorScheme="yellow">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal
