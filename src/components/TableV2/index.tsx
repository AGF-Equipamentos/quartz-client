import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
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
  Icon,
  Stack,
  Text,
  Input,
  Select
} from '@chakra-ui/react'
import {
  FiFilter,
  // FiMaximize2,
  // FiMinimize2,
  // FiChevronDown,
  // FiChevronUp,
  // FiArrowDown,
  // FiArrowRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
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
        <ChakraTable colorScheme="whiteAlpha">
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
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              size="xs"
              _hover={{
                bg: 'gray.500'
              }}
              icon={<Icon as={FiChevronsLeft} boxSize={4} />}
            />
            <IconButton
              colorScheme="gray"
              variant="outline"
              aria-label="Página anterior"
              size="xs"
              _hover={{
                bg: 'gray.500'
              }}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              icon={<Icon as={FiChevronLeft} boxSize={4} />}
            />
            <IconButton
              colorScheme="gray"
              variant="outline"
              aria-label="Próxima página"
              size="xs"
              _hover={{
                bg: 'gray.500'
              }}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              icon={<Icon as={FiChevronRight} boxSize={4} />}
            />
            <IconButton
              colorScheme="gray"
              variant="outline"
              aria-label="Última página"
              size="xs"
              _hover={{
                bg: 'gray.500'
              }}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              icon={<Icon as={FiChevronsRight} boxSize={4} />}
            />
            <Box>
              Página{''}
              <strong>
                {table.getState().pagination.pageIndex + 1} of {''}
                {table.getPageCount()}
              </strong>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Text> Ir para a página: </Text>
            <Input
              variant="flushed"
              focusBorderColor="yellow.500"
              min={1}
              size="sm"
              w="24"
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
            />
            <Select
              size="sm"
              w="24"
              minW="24"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize} Itens
                </option>
              ))}
            </Select>
          </Stack>
        </Flex>
      </div>
    </>
  )
}
