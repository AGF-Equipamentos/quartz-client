import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState
} from '@tanstack/react-table'
import {
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Heading,
  Box,
  IconButton,
  Icon
} from '@chakra-ui/react'
import { FiFilter } from 'react-icons/fi'

import { dataV2, columns } from 'components/TableV2/mock'
import { useState } from 'react'
import FilterModalV2 from './FilterV2'

export type TablePropsV2 = {
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

function TableV2() {
  const [data, setData] = React.useState(() => [...dataV2])
  const rerender = React.useReducer(() => ({}), {})[1]
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [globalFilter, setGlobalFilter] = React.useState('')

  // const Table = useReactTable({
  //   data,
  //   columns,
  //   state: {
  //     columnFilter,
  //     globalFilter
  //   },

  // })
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { columnFilters, globalFilter },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter
    // globalFilterFn: fuzzyFilter
  })

  const [showFilterModalV2, setShowFilterModalV2] = useState(false)

  async function handleOpenFilter() {
    setShowFilterModalV2(true)
  }

  async function handleCloseFilter() {
    setShowFilterModalV2(false)
  }
  return (
    <>
      <FilterModalV2
        isOpen={showFilterModalV2}
        handleClose={handleCloseFilter}
      />
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Titulo</Heading>
        <Box justifyContent="flex-end" mr={3}>
          <IconButton
            color="white"
            variant="link"
            aria-label="Filtrar"
            onClick={handleOpenFilter}
            icon={<Icon as={FiFilter} boxSize="14px" />}
          />
        </Box>
      </Flex>
      <div className="p-2">
        <ChakraTable>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </div>
    </>
  )
}

export default TableV2
