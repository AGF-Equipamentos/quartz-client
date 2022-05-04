import { Column } from 'react-table'
import { EditIcon } from '@chakra-ui/icons'
import { AccordionDescendantsProvider, Badge } from '@chakra-ui/react'
import { access } from 'fs'

type UnitConversion = {
  number: string
  provider: string
  tags: string
  month: string
  observation: string
  delivery: string
  status: string
  bought: string
  approved: string
}

const data = [
  {
    number: '001',
    provider: 'Ronaldo',
    // tags: ['MF75P2', 'MF50P2'],
    tags: 'pedido CE26p',
    month: 'Maio',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando cotação',
    bought: 'Arthur',
    approved: 'Sim'
  },
  {
    number: '002',
    provider: 'Alana',
    tags: 'pedido CE26p',
    month: 'Junho',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Kevin',
    approved: 'Não'
  },
  {
    number: '003',
    provider: 'Arthur',
    tags: 'pedido CE27p',
    month: 'Julho',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando cotação',
    bought: 'Alana',
    approved: 'Sim'
  },
  {
    number: '004',
    provider: 'Kevin',
    tags: 'pedido CE28p',
    month: 'Agosto',
    observation: 'Tá quase dando certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando cotação',
    bought: 'Bruna',
    approved: 'Não'
  },
  {
    number: '005',
    provider: 'Bruna',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '006',
    provider: 'Isabela',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '007',
    provider: 'Gustavo',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '008',
    provider: 'Ana Laura',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '009',
    provider: 'Maria Laura',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '010',
    provider: 'Gabriel',
    tags: 'pedido CE29p',
    month: 'Setembro',
    observation: 'Não deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '011',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '012',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '013',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '014',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '015',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '016',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '017',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '018',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '019',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '020',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '021',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '022',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '023',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '024',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '025',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    month: 'Janeiro',
    observation: 'Deu certo',
    delivery: '16/04/2022',
    status: 'Cotação feita',
    bought: 'Ronaldo',
    approved: 'Sim'
  }
]

const columns: Column<UnitConversion>[] = [
  {
    Header: 'Número',
    accessor: 'number',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Número`
  },
  {
    Header: 'Fornecedor',
    accessor: 'provider',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Fornecedores`
  },
  {
    Header: 'Tags',
    accessor: 'tags',
    aggregate: 'uniqueCount',
    // Cell: ({ cell: { tags } }) => <Badge accessor={tags} />,
    Aggregated: ({ value }) => `${value} Tags`
  },
  {
    Header: 'Mês',
    accessor: 'month',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Mês`
  },
  {
    Header: 'Observação',
    accessor: 'observation',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value} Obeservações`
  },
  {
    Header: 'Entrega',
    accessor: 'delivery',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Entregas`
  },
  {
    Header: 'Status',
    accessor: 'status',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Status`
  },
  {
    Header: 'Comprador',
    accessor: 'bought',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Compradores`
  },
  {
    Header: 'Aprovado',
    accessor: 'approved',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Aprovados`
  },
  {
    Header: 'Ações',
    Cell: <EditIcon />
  }
]

export { data, columns }
