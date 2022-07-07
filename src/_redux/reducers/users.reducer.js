import {USER_LOADING, USER_SUCCESS, USER_FAILED, USER_LOGOUT, USER_VERIFIED} from '../types'
import jwtDecode from 'jwt-decode'

const initialState = {
    id: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: null,
    isLoading: false,
    is_staff: localStorage.getItem('is_staff') || null,
    email: null
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            const {is_staff, ...rest} = jwtDecode(action.payload.access_token)
            localStorage.setItem('token', action.payload.access_token)
            if (is_staff) localStorage.setItem('is_staff', is_staff)
            return {
                ...state,
                is_staff,
                ...rest,
                token: action.payload.access_token,
                isAuthenticated: true,
                isLoading: false,
            }
        case USER_VERIFIED:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case USER_FAILED:
            localStorage.removeItem('token')
            localStorage.removeItem('is_staff')
            return {
                ...state,
                token: null,
                email: null,
                isAuthenticated: false,
                isLoading: false,
                is_staff: false,
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('is_staff')
            return {
                ...state,
                email: null,
                token: null,
                isAuthenticated: false,
                is_staff: false,
            }
        default:
            return state
    }
}

export default Reducer