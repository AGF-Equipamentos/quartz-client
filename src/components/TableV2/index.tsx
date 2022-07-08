import { Box } from '@chakra-ui/react'
import * as React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Table as ChakraTable, Thead, Tr } from '@chakra-ui/react'

import { dataV2, columns } from 'components/TableV2/mock'

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="p-2">
      <ChakraTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {/* {headerGroup.isPlaceholder
                ? null
                : flexRender(
                    header.colum.colum.Def.header,
                    header.getContext()
                  )} */}
            </Tr>
          ))}
        </Thead>
      </ChakraTable>
    </div>
  )
}

export default TableV2
