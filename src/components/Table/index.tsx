/* eslint-disable react/jsx-key */
import * as React from 'react'
import {
  Table,
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
  HStack
} from '@chakra-ui/react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UnlockIcon,
  LockIcon,
  ArrowForwardIcon,
  ArrowDownIcon
} from '@chakra-ui/icons'
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useGroupBy,
  useExpanded
} from 'react-table'

export type DataTableProps<Data extends object> = {
  data: Data[]
  columns: Column<Data>[]
}

export default function DataTable<Data extends object>({
  data,
  columns
}: DataTableProps<Data>) {
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
    state: { pageIndex, pageSize }
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination
  )

  return (
    <>
      <Table colorScheme="whiteAlpha" {...getTableProps()}>
        <Thead>
          {/* <Stack direction="row" alignItems="center">
            <chakra.span
              style={{
                display: 'inline-block',
                background: '#38A169',
                padding: '0.5rem ',
                color: 'white'
              }}
            >
              Agrupados
            </chakra.span>

            <chakra.span
              style={{
                display: 'inline-block',
                background: '#ED8936',
                padding: '0.5rem ',
                color: 'white'
              }}
            >
              Agregados
            </chakra.span>

            <chakra.span
              style={{
                display: 'inline-block',
                background: '#E53E3E',
                padding: '0.5rem ',
                color: 'white'
              }}
            >
              Repetidos
            </chakra.span>
          </Stack> */}

          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  color="gray.300"
                  width="8"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.canGroupBy ? (
                    <chakra.span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? (
                        <UnlockIcon aria-label="sorted descending" />
                      ) : (
                        <LockIcon aria-label="sorted descending" />
                      )}
                    </chakra.span>
                  ) : null}

                  {column.render('Header')}

                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
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
                    style={{
                      background: cell.isGrouped
                        ? '#38A169'
                        : cell.isAggregated
                        ? '#ED8936'
                        : cell.isPlaceholder
                        ? '#E53E3E'
                        : ''
                    }}
                  >
                    {cell.isGrouped ? (
                      <>
                        <chakra.span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? (
                            <ArrowDownIcon />
                          ) : (
                            <ArrowForwardIcon />
                          )}
                        </chakra.span>
                        {cell.render('Cell')} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      cell.render('Aggregated')
                    ) : cell.isPlaceholder ? null : (
                      cell.render('Cell')
                    )}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

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
            icon={<ArrowLeftIcon boxSize={2} />}
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
            icon={<ChevronLeftIcon boxSize={4} />}
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
            icon={<ChevronRightIcon boxSize={4} />}
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
            icon={<ArrowRightIcon boxSize={2} />}
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
  // function roundedMedian(leafValue) {
  //   let min = leafValue[0] || 0
  //   let max = leafValue[0] || 0

  //   leafValue.forEach((value) => {
  //     min = Math.min(min, value)
  //     max = Math.max(max, value)
  //   })
  //   return Math.round((min + max) / 2)
  // }
}
