import {combineReducers} from 'redux'

import UsersReducer from './users.reducer'
import OrderReducer from './order.reducer'
import PlayDevicesReducer from './play_devices.reducer'

export default combineReducers({
    users: UsersReducer,
    orders: OrderReducer,
    playDevices: PlayDevicesReducer,
})