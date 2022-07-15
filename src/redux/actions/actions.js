import { types } from "../types"

export const getProductAction = (product) => {
    return {
        type: types.GET_PRODUCT_ACTION,
        payload: product,
    }
}

export const deleteProductAction = (product) => {
    return {
        type: types.DELETE_PRODUCT_ACTION,
        payload: product,
    }
}

export const increaseCountAction = (count) => {
    return {
        type: types.INCREASE_COUNT_ACTION,
        payload: count,
    }
}

export const getTotalSummAction = (totalSumm) => {
    return {
        type: types.GET_TOTALSUMM_ACTION,
        payload: totalSumm,
    }
}


