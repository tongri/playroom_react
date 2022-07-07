import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import {useDispatch} from 'react-redux'
import {updateOrderStatus} from '../../_redux/actions/order.actions'

const AdminOrder = ({
    id, play_device, session_time_start, session_time_end, players, user, status
}) => {
    const dsp = useDispatch()

    const acceptOrder = () => {
        dsp(updateOrderStatus(id, "accepted"))
    }

    const declineOrder = () => {
        dsp(updateOrderStatus(id, "declined"))
    }

    return (
        <>
            <tr>
                <td>
                    {play_device.name}
                </td>
                <td>
                    {session_time_start}
                </td>
                <td>
                    {session_time_end}
                </td>
                <td>
                    {players}
                </td>
                <td>
                    {user.username}
                </td>

                <td>
                    {status}
                </td>
                {
                    status === "pending" &&
                    <>
                        <td>

                            <DoneOutlinedIcon onClick={() => acceptOrder()}/>
                        </td>
                        <td>
                            <ClearOutlinedIcon onClick={() => declineOrder()}/>
                        </td>
                    </>
                }
            </tr>
        </>
    )
}

export default AdminOrder