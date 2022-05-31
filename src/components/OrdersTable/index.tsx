import { Column } from 'react-table'
// import { EditIcon } from '@chakra-ui/icons'
import { Badge } from '@chakra-ui/react'
import Table from 'components/Table'

export type Order = {
  number: string
  provider: string
  tags: string
  month: number
  observation: string
  delivery: string
  status: string
  bought: string
  approved: string
}

type OrdersTableProps = {
  orders: Omit<Order, 'month'>[]
}

function OrdersTable({ orders }: OrdersTableProps) {
  const ordersFormatted = orders.map((orders) => ({
    ...orders,
    month: new Date(orders.delivery).getMonth() + 1
  }))

  const columns: Column<Order>[] = [
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
      Aggregated: ({ value }) => `${value} Fornecedores`
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
      Aggregated: ({ value }) => `${value} Meses`,
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
      Aggregated: ({ value }) => `${value} Observações`
    },
    {
      Header: 'Entrega',
      accessor: 'delivery',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Entregas`,
      Cell: ({ cell: { value } }) =>
        new Date(value).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
    },
    {
      Header: 'Status',
      accessor: 'status',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Status`
    },
    {
      Header: 'Comprador',
      accessor: 'bought',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Compradores`
    },
    {
      Header: 'Aprovado',
      accessor: 'approved',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Aprovados`
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
  // console.log(data)

  return <Table data={ordersFormatted} columns={columns} />
}

export default OrdersTable
