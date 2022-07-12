import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
        // handleFilter={table.setColumnFilters}
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
                          {/* {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table}/>
                            </div>
                          ) : null} */}
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

export default TableV2
