import { Story, Meta } from '@storybook/react/types-6-0'
import DataTable, { TableProps } from '.'
import { data, columns } from './mock'
export default {
  title: 'Table',
  component: DataTable
} as Meta

export const Default: Story<TableProps> = (args) => (
  <DataTable {...args} columns={columns} data={data} />
)

Default.args = {
  data
}
