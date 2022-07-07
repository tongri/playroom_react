import axios from '../../_axios'
import getConfig from '../../utils/config'
import {ORDER_LOADING, ORDER_SUCCESS} from '../types'
import {PAGE_SIZE} from '../../utils/constants'



export const loadOrders = (page = 1) => async (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING })

    try {
        const result = await axios.get(
            `api/orders/?size=${PAGE_SIZE}&page=${page}`,
            getConfig(getState)
        )
        dispatch({
            type: ORDER_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        // a?
    }
}


export const adminLoadOrders = (page = 1) => async (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING })

    try {
        const result = await axios.get(
            `api/orders/admin/?size=${PAGE_SIZE}&page=${page}`,
            getConfig(getState)
        )
        dispatch({
            type: ORDER_SUCCESS,
            payload: result.data
        })
    } catch (e) {
        // a?
    }
}

export const createOrder = (play_device_id, data, orderSetter) => async (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING })

    try {
        const result = await axios.post(
            `api/orders/${play_device_id}/`,
            data,
            getConfig(getState)
        )
        dispatch({
            type: ORDER_SUCCESS,
            payload: result.data
        })
        orderSetter(result.data.id)
    } catch (err) {
        // a?
    }
}

export const updateOrderStatus = (OrderId, newStatus) => async (dispatch, getState) => {
    try {
        const result = await axios.patch(
            `api/orders/${OrderId}/?new_status=${newStatus}`,
            {},
            getConfig(getState)
        )
        dispatch(adminLoadOrders())
    } catch (e) {
        console.log(e)
    }
}
