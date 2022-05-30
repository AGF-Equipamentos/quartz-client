// import { data } from 'components/Table/mock'
import { Column } from 'react-table'

type OrdersTableProps = {
  data: {
    number: string
    provider: string
    tags: string
    month: string
    observation: string
    delivery: Date
    status: string
    bought: string
    approved: string
  }[]
}

function Orders_Table({ data }: OrdersTableProps) {
  const columns: Column<OrdersTableProps>[] = [
    {
      Header: 'Número'
      // accessor: data.number,
      // agregate: 'uniqueCount'
    },
    {
      Header: 'Fornecedor'
      // accessor: 'provider',
      // aggregate: 'uniqueCount'
    }
  ]
  console.log(data)
  return <label>Deu certo</label>
}

export default Orders_Table
