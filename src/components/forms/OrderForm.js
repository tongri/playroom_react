import {Box, Button, CircularProgress, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {createOrder} from '../../_redux/actions/order.actions'
import {CustomDialog} from '../Layout/CustomDialog'
import {useState} from 'react'

const OrderForm = ({ playDeviceId }) => {
    const dsp = useDispatch()
    const isLoading = useSelector(state => state.orders.isLoading)
    const [orderId, setOrderId] = useState(0)
    const [formValues, setFormValues] = useState({
        players: 0,
        session_time_end: new Date().toJSON().slice(0, -8),
        session_time_start: new Date().toJSON().slice(0, -8),
    })

    const handleInput = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>  {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        dsp(createOrder(playDeviceId, formValues, setOrderId))
    }
    return (
        <>
            <Box component="form" onSubmit={submitHandler} noValidate>
                <TextField
                    variant="filled"
                    placeholder="Enter players amount"
                    id="players"
                    name="players"
                    type="number"
                    min={1}
                   fullWidth
                    value={formValues.players}
                    onChange={e => handleInput(e)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="session_time_start"
                    label="Session Time Start"
                    variant="standard"
                    id="session_time_start"
                    type="datetime-local"
                    value={formValues.session_time_start}
                    onChange={e => handleInput(e)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="session_time_end"
                    label="Session Time End"
                    variant="standard"
                    id="session_time_end"
                    type="datetime-local"
                    value={formValues.session_time_end}
                    onChange={e => handleInput(e)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1 }}
                    fontSize={30}
                >
                    { isLoading ? <CircularProgress color="inherit" size={30} /> : "order session" }
                </Button>
            </Box>
        </>
    )
}

export default OrderForm