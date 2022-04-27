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
  Button,
  Select,
  HStack,
  Box
} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, Column, usePagination, useSortBy } from 'react-table'

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
    useSortBy,
    usePagination
  )

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
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
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

      <HStack spacing={['6', '8']} mx={['6', '8']} pr={['6', '8']} py="1">
        <Box>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            size="xs"
          >
            {'<<'}
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            size="xs"
          >
            {'<'}
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            size="xs"
          >
            {'>'}
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            size="xs"
          >
            {'>>'}
          </Button>
        </Box>
        <span>
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
        <Box>| Ir para a página: </Box>
        <Box>
          <NumberInput
            min={0}
            size="xs"
            defaultValue={pageIndex + 1}
            onChange={(valueString) => {
              const page = valueString ? Number(valueString) - 1 : 0
              gotoPage(page)
            }}
            style={{
              color: 'white',
              background: '#2D3748'
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box>
          <Select
            // h="15px"
            size="sm"
            variant="flushed"
            value={pageSize}
            style={{ color: 'white' }}
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
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Box>
      </HStack>
    </>
  )
}
