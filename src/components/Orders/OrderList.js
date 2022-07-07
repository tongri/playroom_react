import Order from './Order'
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact'

const OrderList = ({items}) => {

    return items.length ? (
        <>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Play Device</th>
                        <th>Session Time Start</th>
                        <th>Session Time End</th>
                        <th>Players</th>
                        <th>Status</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {items.map(order => (
                    <Order key={order.id} {...order} />
                ))}
                </MDBTableBody>
            </MDBTable>
        </>
    ) : (
        <p className="text-center">No orders yet...</p>
    )
}

export default OrderList