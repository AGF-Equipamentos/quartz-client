import OrdersTable, { OrdersTableProps } from 'components/OrdersTable'
import ordersMock from 'components/OrdersTable/mock'
import Base from 'templates/Base'

export default function Index(props: OrdersTableProps) {
  return (
    <Base>
      <OrdersTable {...props} />
    </Base>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      orders: ordersMock
    }
  }
}
