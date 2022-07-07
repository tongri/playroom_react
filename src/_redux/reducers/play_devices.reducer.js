import {PLAY_DEVICES_SUCCESS, PLAY_DEVICES_LOADING} from '../types'


const initialState = {
    isLoading: false,
    items: [],
    total: 0,
    page: 1,
    size: 0
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case PLAY_DEVICES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case PLAY_DEVICES_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        default:
            return state
    }
}
export default Reducer