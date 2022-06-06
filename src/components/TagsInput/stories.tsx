import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TagsInput } from '.'

export default {
  title: 'TagsInput',
  component: TagsInput
} as Meta

export const Default: Story = () => (
  <Box maxW="720px">
    <TagsInput
    // setValue={}
    />
  </Box>
)
