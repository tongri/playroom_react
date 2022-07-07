import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {Box, CircularProgress, SpeedDial, SpeedDialIcon} from '@mui/material'
import {CustomDialog} from '../components/Layout/CustomDialog'
import PaginationPage from '../components/Pagination'
import PlayDeviceList from '../components/Places/PlayDeviceList'
import {PlayDeviceForm} from '../components/forms/PlayDeviceForm'
import {loadPlayDevices} from '../_redux/actions/play_devices.actions'

const Main = () => {
    const { items, isLoading, ...pagination } = useSelector(state => state.playDevices)
    const token = useSelector(state => state.users.token)
    const is_staff = useSelector(state => state.users.is_staff)
    const is_authenticated = useSelector(state => state.users.isAuthenticated)
    const [isDialogOpen, setDialog] = useState(false)

    const handleDialog = () => {
        setDialog(st => !st)
    }

    const dsp = useDispatch()
    const changePage = ( newPage ) => {
        dsp(loadPlayDevices(newPage))

    }
    useEffect(() => {
        console.log(`loading...`)
        dsp(loadPlayDevices())
    }, [token, dsp])
    return (
        <>
            { isLoading ? <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh"
            ><CircularProgress color="inherit" size={100}/></Box> :
                <>
                    <PlayDeviceList items={items}/>
                    <PaginationPage {...pagination} pageChanger={changePage}/>
                </>
            }
            { is_staff ?
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClick={handleDialog}
                >hi</SpeedDial>
            : null}
            <CustomDialog isDialogOpen={isDialogOpen} setDialog={handleDialog}  title={"Create Play Device"}>
                <PlayDeviceForm title="create play device"/>
            </CustomDialog>
        </>
    )
}

export default Main