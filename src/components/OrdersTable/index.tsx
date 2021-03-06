import { Column } from 'react-table'
import Table from 'components/Table'
import { Badge, Tooltip, Container, Icon } from '@chakra-ui/react'

import {
  FiSend,
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertOctagon
} from 'react-icons/fi'

export type Order = {
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

export type OrdersTableProps = {
  orders: Omit<Order, 'month'>[]
}

type IconStatusProps = {
  status: string
}
type BadgeApprovedProps = {
  approved: string
}

const BadgeApproved = ({ approved }: BadgeApprovedProps) => {
  if (approved === 'Sim')
    return (
      <Badge variant="subtle" colorScheme="green">
        {approved}
      </Badge>
    )
  else
    return (
      <Badge variant="subtle" colorScheme="red">
        {approved}
      </Badge>
    )
}

const IconStatus = ({ status }: IconStatusProps) => {
  switch (status) {
    case 'Aguardando envio ao fornecedor':
      return (
        <Tooltip hasArrow label="Aguardando envio ao fornecedor">
          <span>
            <Icon as={FiSend} color="orange.400" />
          </span>
        </Tooltip>
      )
    case 'Aguardando confirmação':
      return (
        <Tooltip hasArrow label="Aguardando confirmação">
          <span>
            <Icon as={FiClock} color="cyan.400" />
          </span>
        </Tooltip>
      )
    case 'Confirmado':
      return (
        <Tooltip hasArrow label="Confirmado">
          <span>
            <Icon as={FiCheckCircle} color="green.400" />
          </span>
        </Tooltip>
      )
    case 'Atrasado':
      return (
        <Tooltip hasArrow label="Atrasado">
          <span>
            <Icon as={FiAlertOctagon} color="red.500" />
          </span>
        </Tooltip>
      )
    default:
      return (
        <Tooltip hasArrow label="Aguardando aprovação">
          <span>
            <Icon as={FiAlertTriangle} color="yellow.300" />
          </span>
        </Tooltip>
      )
  }
}

function OrdersTable({ orders }: OrdersTableProps) {
  const ordersFormatted = orders.map((orders) => ({
    ...orders,
    month: new Date(orders.delivery).getMonth() + 1
  }))

  const columns: Column<Order>[] = [
    {
      Header: 'Status',
      accessor: 'status',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Status`,
      Cell: ({ cell: { value } }) => (
        <Container centerContent>
          <IconStatus status={value} />
        </Container>
      )
    },

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
      Cell: ({ cell: { value } }) =>
        value
          .split(';')
          .map((value, index) => (
            <Badge colorScheme="green" key={index}>{`${value}`}</Badge>
          ))
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
      Header: 'Comprador',
      accessor: 'buyer',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Compradores`
    },
    {
      Header: 'Aprovado',
      accessor: 'approved',
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Aprovados`,
      Cell: ({ cell: { value } }) => <BadgeApproved approved={value} />
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
