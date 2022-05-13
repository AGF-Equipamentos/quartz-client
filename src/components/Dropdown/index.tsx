import { Box, FormLabel, FormControl, Select } from '@chakra-ui/react'
export type DropdownProps = {
  name: string
  label?: string
  items?: {
    label: string
    value: number
  }[]
}

const Dropdown = ({ name, label, items, ...rest }: DropdownProps) => (
  <Box>
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Select name={name} id={name} {...rest} focusBorderColor="yellow.500">
        {items?.map((items) => (
          <option key={items.value} style={{ backgroundColor: 'black' }}>
            {items.label}
          </option>
        ))}
      </Select>
    </FormControl>
  </Box>
)

export default Dropdown
