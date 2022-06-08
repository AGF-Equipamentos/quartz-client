import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersTable from '.'
import ordersMock from './mock'

export default {
  title: 'OrdersTable',
  component: OrdersTable
} as Meta

export const Default: Story = () => (
  <Box w="1080px">
    <OrdersTable orders={ordersMock} />
  </Box>
)
