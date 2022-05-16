import { Box, FormLabel, FormControl } from '@chakra-ui/react'
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps
} from '@chakra-ui/react'

export type SelectProps = {
  name: string
  label?: string
  items: {
    label: string
    value: number
  }[]
} & ChakraSelectProps
const Dropdown = ({ name, label, items, ...rest }: SelectProps) => (
  <Box>
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect name={name} id={name} {...rest}>
        {items?.map((items) => (
          <option key={items.value} value={items.value}>
            {items.label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  </Box>
)

export default Dropdown
