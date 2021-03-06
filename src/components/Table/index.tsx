import {
  FiFilter,
  FiMaximize2,
  FiMinimize2,
  FiChevronDown,
  FiChevronUp,
  FiArrowDown,
  FiArrowRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'

import { TbFilterOff } from 'react-icons/tb'
/* eslint-disable react/jsx-key */
import { useState } from 'react'
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
  Icon
} from '@chakra-ui/react'

import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useGroupBy,
  useExpanded,
  useFilters
} from 'react-table'
import FilterModal from './Filter'
import { Order } from 'components/OrdersTable'

export type TableProps = {
  data: Order[]
  columns: Column<Order>[]
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
    usePagination
  )

  const [showFilterModal, setShowFilterModal] = useState(false)

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

      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Titulo</Heading>
        <Box justifyContent="flex-end" mr={3}>
          <IconButton
            color="white"
            variant="link"
            aria-label="Limpar Filtro"
            onClick={() => setAllFilters([])}
            icon={<Icon as={TbFilterOff} />}
          />
          <IconButton
            color="white"
            variant="link"
            onClick={handleOpenFilter}
            aria-label="Filtrar"
            icon={<Icon as={FiFilter} boxSize="14px" />}
          />
        </Box>
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
            aria-label="Primeira p??gina"
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
            aria-label="Pr??xima p??gina"
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
            aria-label="P??gina anterior"
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
            aria-label="??ltima p??gina"
            _hover={{
              bg: 'gray.500'
            }}
            icon={<Icon as={FiChevronsRight} boxSize={4} />}
          />
          <Box>
            P??gina{' '}
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
            focusBorderColor="yellow.500"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} Itens
              </option>
            ))}
          </Select>
        </Stack>
      </Flex>
    </>
  )
}
