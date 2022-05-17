import { Story, Meta } from '@storybook/react/types-6-0'
import DataTable, { DataTableProps } from '.'
import { data, columns } from './mock'
export default {
  title: 'Table',
  component: DataTable
} as Meta

export const Default: Story<DataTableProps<object>> = (args) => (
  <DataTable {...args} columns={columns} data={data} />
)

Default.args = {
  data
}
