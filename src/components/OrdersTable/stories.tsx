import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersTable from '.'
import orders from './mock'

export default {
  title: 'OrdersTable',
  component: OrdersTable
} as Meta

export const Default: Story = () => <OrdersTable orders={orders} />
