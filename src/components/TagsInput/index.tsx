import {
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  Grid,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'
import { Input } from 'components/Input'

const TagsInput = () => {
  return (
    <Box borderRadius={8} bg="gray.700" p={['8']}>
      <label>Tags</label>
      {/* fazer as tags terem seu proprio tamanho */}
      <Grid templateColumns="repeat(auto-fit, 120px)">
        {[
          'pedido MF75P2',
          'MF75P2',
          'pedido',
          'MF75P2',
          'pedido',
          'MF75P2',
          'pedido',
          'MF75P2',
          'pedido MF75P2'
        ].map((tag) => (
          <Tag colorScheme="green" key={tag}>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
        <Input variant="unstyled" name="tags" mt="5" />
      </Grid>
    </Box>
  )
}

export default TagsInput
