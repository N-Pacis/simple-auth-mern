import userReducer from "./userReducer"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    userReducer
})
export default allReducers