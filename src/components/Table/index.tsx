import { Icon } from '@chakra-ui/icons'
import {
  FiFilter,
  FiMaximize2,
  FiMinimize2,
  FiAlertTriangle,
  FiSend,
  FiClock,
  FiCheckCircle,
  FiAlertOctagon,
  FiChevronDown,
  FiChevronUp,
  FiArrowDown,
  FiArrowRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'

/* eslint-disable react/jsx-key */
import * as React from 'react'
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Box,
  IconButton,
  Flex,
  Stack,
  Text,
  Heading,
  Tooltip
} from '@chakra-ui/react'

import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useGroupBy,
  useExpanded,
  useFilters,
  Row
  // useRowSelect
  // Row
} from 'react-table'
import FilterModal from './Filter'
import { Order } from 'components/OrdersTable'
// import { ColumnOrderState } from '@tanstack/react-table'

export type TableProps = {
  data: Order[]
  columns: Column<Order>[]
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

export default function Table({ data, columns }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize }
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: '',
          Cell: ({ row }: { row: Row<object> }) => {
            return (
              <IconStatus
                status={
                  row.cells.find((value) => value.column.Header === 'Status')
                    ?.value
                }
              />
            )
          }
        },
        ...columns
      ])
    }
  )
  // const [columnVisibility, setColumnVisibility] = React.useState({})
  // const [columnOder, setColumnOrder] = React.useState<ColumnOrderState>([])

  const [showFilterModal, setShowFilterModal] = React.useState(false)

  async function handleOpenFilter() {
    setShowFilterModal(true)
  }
  async function handleCloseFilter() {
    setShowFilterModal(false)
  }

  return (
    <>
      <FilterModal
        isOpen={showFilterModal}
        handleClose={handleCloseFilter}
        handleFilter={setAllFilters}
      />

      <Flex justifyContent="space-between">
        <Heading>Titulo</Heading>
        <IconButton
          color="white"
          variant="link"
          onClick={handleOpenFilter}
          aria-label="Filtrar"
          icon={<Icon as={FiFilter} boxSize="14px" />}
        />
      </Flex>
      <ChakraTable colorScheme="whiteAlpha" {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  color="gray.300"
                  width="8"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  <Box h="10" display="flex" alignItems="center">
                    {column.canGroupBy ? (
                      <chakra.span
                        display="flex"
                        alignItems="center"
                        {...column.getGroupByToggleProps()}
                      >
                        {column.isGrouped ? (
                          <IconButton
                            color="white"
                            variant="link"
                            aria-label="Expandir"
                            icon={<Icon as={FiMaximize2} boxSize="14px" />}
                          />
                        ) : (
                          <IconButton
                            variant="link"
                            size="xs"
                            aria-label="Minimizar"
                            icon={<Icon as={FiMinimize2} boxSize="14px" />}
                          />
                        )}
                      </chakra.span>
                    ) : null}

                    {column.render('Header')}
                    <chakra.span display="flex" alignItems="center" pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon
                            as={FiChevronDown}
                            aria-label="sorted descending"
                          />
                        ) : (
                          <Icon
                            as={FiChevronUp}
                            aria-label="sorted ascending"
                          />
                        )
                      ) : null}
                    </chakra.span>
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                    bg={
                      cell.isGrouped
                        ? 'gray.700'
                        : cell.isAggregated
                        ? 'gray.800'
                        : cell.isPlaceholder
                        ? 'gray.900'
                        : ''
                    }
                  >
                    <Stack direction="row" alignItems="center">
                      {cell.isGrouped ? (
                        <>
                          <chakra.span
                            display="flex"
                            alignItems="center"
                            {...row.getToggleRowExpandedProps()}
                          >
                            {row.isExpanded ? (
                              <Icon as={FiArrowDown} pr="2px" />
                            ) : (
                              <Icon as={FiArrowRight} pr="2px" />
                            )}
                          </chakra.span>
                          {cell.render('Cell')} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        cell.render('Aggregated')
                      ) : cell.isPlaceholder ? null : (
                        cell.render('Cell')
                      )}
                    </Stack>
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </ChakraTable>

      <Flex
        direction={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="space-between"
        gap={['4', '4', '0']}
        mt="8"
      >
        <Stack direction="row" alignItems="center">
          <IconButton
            colorScheme="gray"
            variant="outline"
            aria-label="Primeira página"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            size="xs"
            _hover={{
              bg: 'gray.500'
            }}
            icon={<Icon as={FiChevronsLeft} boxSize={4} />}
          />
          <IconButton
            colorScheme="gray"
            variant="outline"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            size="xs"
            aria-label="Próxima página"
            _hover={{
              bg: 'gray.500'
            }}
            icon={<Icon as={FiChevronLeft} boxSize={4} />}
          />
          <IconButton
            colorScheme="gray"
            variant="outline"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            size="xs"
            aria-label="Página anterior"
            _hover={{
              bg: 'gray.500'
            }}
            icon={<Icon as={FiChevronRight} boxSize={4} />}
          />
          <IconButton
            colorScheme="gray"
            variant="outline"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            size="xs"
            aria-label="Última página"
            _hover={{
              bg: 'gray.500'
            }}
            icon={<Icon as={FiChevronsRight} boxSize={4} />}
          />
          <Box>
            Página{' '}
            <strong>
              {pageIndex + 1} de {pageOptions.length}
            </strong>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Text>Ir para a pagina:</Text>
          <NumberInput
            min={1}
            size="sm"
            w="24"
            defaultValue={pageIndex + 1}
            onChange={(valueString) => {
              const page = valueString ? Number(valueString) - 1 : 0
              gotoPage(page)
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            size="sm"
            w="24"
            minW="24"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option
                key={pageSize}
                value={pageSize}
                style={{ backgroundColor: 'black' }}
              >
                {pageSize} Itens
              </option>
            ))}
          </Select>
        </Stack>
      </Flex>
    </>
  )
}
