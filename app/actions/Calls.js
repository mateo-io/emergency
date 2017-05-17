import * as types from '../constants/CallActions'

export const addCall = text => ({ type: types.ADD_CALL, text })
export const deleteCall = id => ({ type: types.DELETE_CALL, id })
export const editType = (id, text) => ({ type: types.EDIT_TYPE, id, text })

export const updateDispatched = (id, date) => ({ type: types.UPDATE_DISPATCHED, id, date })
export const updateArrived = (id, date) => ({ type: types.UPDATE_ARRIVED, id, date })


export const completeCall = id => ({ type: types.COMPLETE_CALL, id })
export const openCall = id => ({ type: types.OPEN_CALL, id })

//CallComments
export const addComment = (id, text) => ({type: types.ADD_COMMENT, id, text })


export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
