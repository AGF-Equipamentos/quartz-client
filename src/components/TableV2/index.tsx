import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  // getPaginationRowModel,
  ColumnDef
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
// import { dataV2, columns } from 'components/TableV2/mock'
import { useState } from 'react'
import FilterModalV2 from './FilterV2'
import { OrderV2 } from 'components/OrdersTableV2'
import { TbFilterOff } from 'react-icons/tb'

export type TablePropsV2 = {
  data: OrderV2[]
  columns: ColumnDef<OrderV2>[]
}

export default function TableV2({ data, columns }: TablePropsV2) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    debugTable: true
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
        handleFilter={table.setColumnFilters}
      />
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Titulo</Heading>
        <Box justifyContent="flex-end" mr={3}>
          <IconButton
            color="white"
            variant="link"
            aria-label="Limpar Filtro"
            onClick={() => table.setColumnFilters([])}
            icon={<Icon as={TbFilterOff} boxSize="14px" />}
          />
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
        <div className="h-2" />
        <ChakraTable>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </Th>
                  )
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </ChakraTable>
      </div>
    </>
  )
}
