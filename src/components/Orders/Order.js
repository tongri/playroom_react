const Order = ({players, play_device, status, session_time_start, session_time_end}) => {
    return (
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
                {status}
            </td>
        </tr>
    )
}

export default Order