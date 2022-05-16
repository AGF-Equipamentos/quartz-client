import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />
Default.args = {
  name: 'Mês',
  label: 'Mês',
  items: [
    {
      label: 'Janeiro',
      value: 0
    },
    {
      label: 'Fevereiro',
      value: 1
    },
    {
      label: 'Março',
      value: 2
    }
  ]
}
