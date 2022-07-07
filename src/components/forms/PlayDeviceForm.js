import {Box, Button, CircularProgress, TextField} from '@mui/material'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {createPlayDevice, updatePlayDevice} from '../../_redux/actions/play_devices.actions'


export const PlayDeviceForm = ({ playDeviceId, name, price_per_minute, title}) => {
    const dsp = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState({name, price_per_minute})

    const submitHandler = (e) => {
        setIsLoading(true)
        if (playDeviceId) {
            dsp(updatePlayDevice(playDeviceId, formValues))
        } else {
            dsp(createPlayDevice(formValues))
        }
        setIsLoading(false)
    }
    const handleInput = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    return (
        <>
            <Box component="form" onSubmit={submitHandler} noValidate sx={{justifyContent: "center"}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    variant="standard"
                    value={formValues.name}
                    autoFocus
                    onChange={e => handleInput(e)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="price_per_minute"
                    label="Price Per Minute"
                    name="price_per_minute"
                    type="number"
                    variant="standard"
                    value={formValues.price_per_minute}
                    autoFocus
                    onChange={e => handleInput(e)}
                />
                <Box sx={{ justifyContent: 'flex-end' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, p: 1, width: "15rem"}}
                        fontSize={30}
                    >
                        { isLoading ? <CircularProgress color="inherit" size={30} /> : title }
                    </Button>
                </Box>
            </Box>
        </>
    )
}