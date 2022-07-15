import { combineReducers } from "redux"
import { getProductReducer } from "../reducers/getProductReducer"
import { calcReducer } from "../reducers/calcReducer"


export const rootReducer = combineReducers({
    products: getProductReducer,
    count: calcReducer,
})