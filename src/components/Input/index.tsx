import { Box, FormLabel, FormControl } from '@chakra-ui/react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

export type InputProps = {
  name: string
  label?: string
} & ChakraInputProps

const Input = ({ name, label, ...rest }: InputProps) => (
  <Box>
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="yellow.500"
        {...rest}
      />
    </FormControl>
  </Box>
)

export default Input
