import { Icon } from '@chakra-ui/icons'
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi'
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
  Text
} from '@chakra-ui/react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
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
//import { clearLine } from 'readline'

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
                            size="xs"
                            aria-label="Minimizar"
                            icon={<Icon as={FiMinimize2} boxSize={3} />}
                          />
                        ) : (
                          <IconButton
                            color="white"
                            variant="link"
                            aria-label="Expandir"
                            icon={<Icon as={FiMaximize2} boxSize={3} />}
                          />
                        )}
                      </chakra.span>
                    ) : null}

                    {column.render('Header')}
                    <chakra.span display="flex" alignItems="center" pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
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
                              <ArrowDownIcon pr="2px" />
                            ) : (
                              <ArrowForwardIcon pr="2px" />
                            )}
                          </chakra.span>
                          {cell.render('Cell')} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        cell.render('Aggregated')
                      ) : cell.isPlaceholder ? null : (
                        cell.render('Cell')
                      )}
                      {/* <Icon as={FiEdit}></Icon> */}
                    </Stack>
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
}
