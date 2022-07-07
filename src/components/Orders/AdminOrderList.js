import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact'
import AdminOrder from './AdminOrder'

const AdminOrderList = ({ items }) => {
    console.log("hi")
    return items.length ? (
        <>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Play Device</th>
                        <th>Session Time Start</th>
                        <th>Session Time End</th>
                        <th>Players</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>Decline</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {items.map(order => (
                        <AdminOrder key={order.id} {...order} />
                    ))}
                </MDBTableBody>
            </MDBTable>
        </>
    ) : (
        <p className="text-center">No orders yet...</p>
    )
}

export default AdminOrderList