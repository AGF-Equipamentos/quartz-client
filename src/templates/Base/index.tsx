import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex
            boxShadow="dark-lg"
            w="100%"
            borderRadius={8}
            bg="gray.900"
            p="4"
            marginBottom={4}
          >
            <Box>
              <Text fontSize={18}>VIXMOT0011</Text>
              <Text fontSize={12} color="gray.300">
                MOTOR ELETRICO TRIFASICO IP-55 75CV 8P
              </Text>
              <Text fontSize={12} color="gray.100">
                Quantidade: 25
              </Text>
              <Text fontSize={16} color="yellow.500" mt={3}>
                Usinagem: 05:23m
              </Text>
            </Box>
            <Flex mt="auto" ml="auto">
              <Button size="sm" colorScheme="yellow">
                Pausar
              </Button>
              <Button ml={2} size="sm" colorScheme="red">
                Finalizar
              </Button>
            </Flex>
          </Flex>
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

export default Base
