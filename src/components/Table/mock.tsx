import { Column } from 'react-table'
import { Badge } from '@chakra-ui/react'

import * as React from 'react'

type UnitConversion = {
  number: string
  provider: string
  tags: string
  month: string
  observation: string
  delivery: Date
  status: string
  buyer: string
  approved: string
}

const dataWithoutMonth = [
  {
    number: '001',
    provider: 'Ronaldo',
    tags: 'pedido CE26p',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Arthur',
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
    observation: 'Deu certo',
    delivery: '2022-04-12T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '017',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-13T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '018',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-14T16:37:45.333Z',
    status: 'Aguardando confirmação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '019',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-15T16:37:45.333Z',
    status: 'Confirmado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '020',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-16T16:37:45.333Z',
    status: 'Atrasado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '021',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-17T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '022',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-18T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '023',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-19T16:37:45.333Z',
    status: 'Aguardando confirmação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '024',
    provider: 'Bruno',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-20T16:37:45.333Z',
    status: 'Confirmado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '025',
    provider: 'Carlos',
    tags: 'pedido CE39p',
    observation: 'Deu certo',
    delivery: '2022-04-21T16:37:45.333Z',
    status: 'Atrasado',
    buyer: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '002',
    provider: 'Carlos',
    tags: 'pedido CE39p',
    observation: 'Foiiiii',
    delivery: '2022-04-22T16:37:45.333Z',
    status: 'Aguardando aprovação',
    buyer: 'Ronaldo',
    approved: 'Sim'
  }
]

const data = dataWithoutMonth.map((data) => ({
  ...data,
  month: new Date(data.delivery).getMonth() + 1
}))

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
    Aggregated: ({ value }) => `${value} Tags`,
    Cell: ({ cell: { value } }) => (
      <Badge colorScheme="green">{`${value}`}</Badge>
    )
  },
  {
    Header: 'Mês',
    accessor: 'month',
    aggregate: 'uniqueCount',
    Aggregated: ({ value }) => `${value}  Meses`,
    Cell: ({ cell: { value } }) =>
      new Date(new Date().getFullYear(), Number(value) - 1)
        .toLocaleDateString('pt-BR', {
          month: 'short'
        })
        .toUpperCase()
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
    Cell: ({ cell: { value } }) =>
      new Date(value).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
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
    accessor: 'buyer',
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
    Header: 'Ações'
    // Cell: ({ row }: { row: Row<object> }) => (
    //   <div>
    //     {console.log(
    //       row.cells.map((cell) => ({
    //         id: cell.column.id,
    //         value: cell.value
    //       }))
    //     )}
    //   </div>
    // )
  }
]

export { data, columns, dataWithoutMonth }
