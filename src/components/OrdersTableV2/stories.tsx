import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersTableV2 from '.'
import orders from './mock'

export default {
  title: 'OrdersTableV2',
  component: OrdersTableV2
} as Meta

export const Default: Story = () => <OrdersTableV2 orders={orders} />
