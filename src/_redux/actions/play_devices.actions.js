import { PLAY_DEVICES_SUCCESS, PLAY_DEVICES_LOADING } from '../types'
import axios from '../../_axios'
import getConfig from '../../utils/config'
import {PAGE_SIZE} from '../../utils/constants'


export const loadPlayDevices = (page = 1, all_objects=false) => async (dispatch, getState) => {
    dispatch({ type: PLAY_DEVICES_LOADING })

    try {
        const result = await axios.get(`api/play_devices/?size=${PAGE_SIZE}&page=${page}`, getConfig(getState))
        dispatch({
            type: PLAY_DEVICES_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        // a?
    }
}


export const createPlayDevice = (data) => async (dispatch, getState) => {
    try {
        const result = await axios.post(
            'api/play_devices/',
            data,
            getConfig(getState)
        )
        dispatch(loadPlayDevices())
    } catch (err){
        console.log(err)
    }
}


export const updatePlayDevice = (play_device_id, data) => async (dispatch, getState) => {
    console.log({data})
    try {
        await axios.patch(
            `api/play_devices/${play_device_id}/`,
            data,
            getConfig(getState)
        )
        dispatch(loadPlayDevices())
    } catch (err){
        // a?
    }
}


export const deletePlayDevice = (play_device_id) => async (dispatch, getState) => {
    try {
        const result = await axios.delete(
            `api/play_devices/${play_device_id}/`,
            getConfig(getState)
        )
        dispatch(loadPlayDevices())
    } catch (err){
        // a?
    }
}

