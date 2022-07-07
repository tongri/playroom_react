import {Button, CardActions, CardContent, CircularProgress, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import {CustomDialog} from '../Layout/CustomDialog'
import {useDispatch, useSelector} from 'react-redux'
import {deletePlayDevice} from '../../_redux/actions/play_devices.actions'
import {PlayDeviceForm} from '../forms/PlayDeviceForm'
import OrderForm from '../forms/OrderForm'


const PlayDevice = (
    {id, name, price_per_minute, ...tags}
) => {
    const dsp = useDispatch()
    const is_staff = useSelector(state => state.users.is_staff)
    const is_authenticated = useSelector(state => state.users.isAuthenticated)
    const [isPlayDeviceDialogOpen, setPlayDeviceDialog] = useState(false)
    const [isDeleteLoading, setDeleteLoading] = useState(false)
    const [isOrderDialogOpen, setOrderDialog] = useState(false)

    const handleOrderDialog = () => {
        setOrderDialog(false)
    }

    const handleDelete = () => () => {
        setDeleteLoading(true)
        dsp(deletePlayDevice(id)).finally(() => setDeleteLoading(false))
    }

    const handlePlayDeviceDialogDialog = () => {
        setPlayDeviceDialog(false)
    }

    useEffect(() => {
        setPlayDeviceDialog(false)
    }, [])

    return (
        <>
            <CardContent sx={{ boxShadow: 10, borderRadius: '13px', backgroundColor: '#bbdefb' }}>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    price per minute is  {price_per_minute}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    is_authenticated &&
                    <Button size="small" onClick={() => setOrderDialog(true)}>Order Session</Button>
                }
                {is_staff && <>
                    <Button size="small" onClick={() => setPlayDeviceDialog(true)}>
                        Edit
                    </Button>
                        <Button size="small" onClick={handleDelete(id)}>
                    {isDeleteLoading ?
                        <CircularProgress color="inherit" size={15}/> :
                        "Delete"}
                        </Button>
                </>
                }
            </CardActions>
            <CustomDialog isDialogOpen={isOrderDialogOpen} setDialog={handleOrderDialog}  title={"Create Order"}>
                <OrderForm playDeviceId={id}/>
            </CustomDialog>
        </>
    )
}

export default PlayDevice