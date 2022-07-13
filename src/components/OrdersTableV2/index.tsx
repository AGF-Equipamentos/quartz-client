import { ColumnDef } from '@tanstack/react-table'
import TableV2 from 'components/TableV2'
import { Badge, Tooltip, Icon, Container } from '@chakra-ui/react'
import {
  FiSend,
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertOctagon
} from 'react-icons/fi'
import { info } from 'console'

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

export type OrdersTableProps = {
  orders: Omit<OrderV2, 'month'>[]
}
type IconStatusPorps = {
  status: string
}
type BadgAprrovedProps = {
  approved: string
}

const BadgeApproved = ({ approved }: BadgAprrovedProps) => {
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
const IconStatus = ({ status }: IconStatusPorps) => {
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
function OrdersTableV2({ orders }: OrdersTableProps) {
  const ordersFormatted = orders.map((orders) => ({
    ...orders,
    month: new Date(orders.delivery).getMonth() + 1
  }))

  const columns: ColumnDef<OrderV2>[] = [
    {
      accessorKey: 'status',
      cell: (info) => (
        <Container centerContent>
          <IconStatus status={info.getValue()} />
        </Container>
      ),
      header: 'Status',
      footer: (props) => props.column.id
    },
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
      // cell: (info) =>
      //   info.split(';').map((info, index) => (
      //     <Badge colorScheme="green" key={index}>
      //       {info.getValue}
      //     </Badge>
      //   )),
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
      accessorKey: 'buyer',
      header: 'Comprador',
      footer: (props) => props.column.id
    },
    {
      accessorKey: 'approved',
      cell: (info) => <BadgeApproved approved={info.getValue()} />,
      header: 'Aprovado',
      footer: (props) => props.column.id
    },
    {
      header: 'Ações'
    }
  ]
  return <TableV2 data={ordersFormatted} columns={columns} />
}

export default OrdersTableV2
