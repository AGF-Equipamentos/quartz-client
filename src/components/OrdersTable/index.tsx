import { Column } from 'react-table'
// import { EditIcon } from '@chakra-ui/icons'
import {
  Badge,
  Center,
  Flex,
  Heading,
  IconButton,
  Text,
  Tooltip
} from '@chakra-ui/react'
import Table from 'components/Table'
import {
  FiSend,
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertOctagon,
  FiEdit,
  FiTag,
  FiInfo
} from 'react-icons/fi'
import { Icon } from '@chakra-ui/icons'
// import orders from './mock'

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

export type OrdersTableProps = {
  orders: Omit<Order, 'month'>[]
}

type IconStatusProps = {
  status: string
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
      Header: (
        <Tooltip hasArrow label="Status">
          <span>
            <Icon as={FiInfo} color="gray.300" h="16px" w="16px" mt="4px" />
          </span>
        </Tooltip>
      ),
      accessor: 'status',
      aggregate: 'uniqueCount',
      width: 72,
      Aggregated: ({ value }) => `${value} Status`,
      Cell: ({ cell: { value } }) => (
        <Flex flex="1" justifyContent="center">
          <IconStatus status={value} />
        </Flex>
      )
    },
    {
      Header: 'Núm',
      accessor: 'number',
      aggregate: 'uniqueCount',
      width: 80,
      Aggregated: ({ value }) => `${value} Número`,
      Cell: ({ cell: { value } }) => (
        <Flex flex="1" justifyContent="center">
          {value}
        </Flex>
      )
    },
    {
      Header: 'Comprador',
      accessor: 'bought',
      aggregate: 'uniqueCount',
      width: 120,
      Aggregated: ({ value }) => `${value} Compradores`,
      Cell: ({ row }) =>
        row.original ? (
          <Flex direction="column">
            {row.original.bought}
            {row.original.approved === 'Sim' ? (
              <Badge colorScheme="green" variant="outline" mr="auto" mt="2px">
                aprovado
              </Badge>
            ) : (
              <Badge colorScheme="red" variant="outline" mr="auto" mt="2px">
                pendente
              </Badge>
            )}
          </Flex>
        ) : (
          <p>
            {row.groupByVal}
            {console.log(row)}
          </p>
        )
    },
    {
      Header: 'Fornecedor',
      accessor: 'provider',
      aggregate: 'uniqueCount',
      width: 120,
      Aggregated: ({ value }) => `${value} Fornecedores`
    },
    {
      Header: 'Tags',
      accessor: 'tags',
      minWidth: 150,
      aggregate: 'uniqueCount',
      Aggregated: ({ value }) => `${value} Tags`,
      Cell: ({ cell: { value } }) => (
        <Flex flexWrap="wrap" gap={2}>
          {value.split(';').map((value, index) => (
            <Badge key={index} colorScheme="green">{`${value}`}</Badge>
          ))}
        </Flex>
      )
    },
    {
      Header: 'Mês',
      accessor: 'month',
      aggregate: 'uniqueCount',
      width: 72,
      Aggregated: ({ value }) => `${value} Meses`,
      Cell: ({ cell: { value } }) =>
        new Date(new Date().getFullYear(), Number(value) - 1)
          .toLocaleDateString('pt-BR', {
            month: 'short'
          })
          .toUpperCase()
    },
    // {
    //   Header: 'Mês',
    //   accessor: 'month',
    //   aggregate: 'uniqueCount',
    //   width: 120,
    //   Aggregated: ({ value }) => `${value} Meses`,
    //   Cell: ({ row }) => (
    //     <p>{row.original ? row.original.month : row.groupByVal}</p>
    //   )
    // },
    {
      Header: 'Observação',
      accessor: 'observation',
      aggregate: 'uniqueCount',
      width: 120,
      Aggregated: ({ value }) => `${value} Observações`,
      Cell: ({ cell: { value } }) => (
        <Tooltip hasArrow label={value}>
          <Text size="xs" noOfLines={2}>
            {value}
          </Text>
        </Tooltip>
      )
    },
    {
      Header: 'Entrega',
      accessor: 'delivery',
      aggregate: 'uniqueCount',
      width: 120,
      Aggregated: ({ value }) => `${value} Entregas`,
      Cell: ({ cell: { value } }) =>
        new Date(value).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
    },
    {
      Header: 'Apr',
      accessor: 'approved',
      aggregate: 'uniqueCount',
      width: 120,
      Aggregated: ({ value }) => `${value} Aprovados`
    },
    {
      Header: 'Ações',
      width: 60,
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
      Cell: (
        <IconButton
          color="white"
          p={0}
          variant="link"
          aria-label="Editar"
          icon={<Icon as={FiEdit} boxSize="18px" />}
        />
      )
    }
  ]
  // console.log(data)

  return <Table data={ordersFormatted} columns={columns} />
}

export default OrdersTable
