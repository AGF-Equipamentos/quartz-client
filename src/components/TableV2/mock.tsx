import { ColumnDef } from '@tanstack/react-table'

export type OrderV2 = {
  number: string
  provider: string
  tags: string
  month: number
  observation: string
  delivery: string
  status: string
  buyer: string
  approved: string
}

const dataWithoutMonthV2 = [
  {
    number: '001',
    provider: 'Arthur',
    tags: 'pedido CE20p',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Alana',
    approved: 'Sim'
  },
  {
    number: '002',
    provider: 'Alana',
    tags: 'pedido CE26p',
    observation: 'Não deu certo',
    delivery: '2022-03-29T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    buyer: 'Kevin',
    approved: 'Não'
  },
  {
    number: '003',
    provider: 'Arthur',
    tags: 'pedido CE27p',
    observation: 'Deu certo',
    delivery: '2022-03-30T16:37:45.333Z',
    status: 'Aguardando confirmação',
    buyer: 'Alana',
    approved: 'Sim'
  },
  {
    number: '004',
    provider: 'Kevin',
    tags: 'pedido CE28p',
    observation: 'Tá quase dando certo',
    delivery: '2022-03-31T16:37:45.333Z',
    status: 'Confirmado',
    buyer: 'Bruna',
    approved: 'Não'
  },
  {
    number: '005',
    provider: 'Bruna',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-01T16:37:45.333Z',
    status: 'Atrasado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '006',
    provider: 'Isabela',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '007',
    provider: 'Gustavo',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-03T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '008',
    provider: 'Ana Laura',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-04T16:37:45.333Z',
    status: 'Aguardando confirmação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '009',
    provider: 'Maria Laura',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-05T16:37:45.333Z',
    status: 'Confirmado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '010',
    provider: 'Gabriel',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-06T16:37:45.333Z',
    status: 'Atrasado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '011',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-07T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '012',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-08T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '013',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-09T16:37:45.333Z',
    status: 'Aguardando confirmação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '014',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-10T16:37:45.333Z',
    status: 'Confirmado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '015',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-11T16:37:45.333Z',
    status: 'Atrasado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '016',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'ABR.',
    observation: 'Deu certo',
    delivery: '2022-04-12T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  }
]

const dataV2 = dataWithoutMonthV2.map((data) => ({
  ...data,
  month: new Date(data.delivery).getMonth() + 1
}))

const columns: ColumnDef<OrderV2>[] = [
  {
    accessorKey: 'number',
    header: 'Número',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'provider',
    header: 'Fornecedor',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'month',
    header: 'Mês',
    footer: (props) => props.column.id
  },

  {
    accessorKey: 'observation',
    header: 'Observação',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'delivery',
    header: 'Entrega',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'buyer',
    header: 'Comprador',
    footer: (props) => props.column.id
  },
  {
    accessorKey: 'approved',
    header: 'Aprovado',
    footer: (props) => props.column.id
  },
  {
    header: 'Ação'
  }
]
export { dataV2, columns }
