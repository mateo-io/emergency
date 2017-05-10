import * as types from '../constants/CallActions'

export const addCall = text => ({ type: types.ADD_CALL, text })
export const deleteCall = id => ({ type: types.DELETE_CALL, id })
export const editType = (id, text) => ({ type: types.EDIT_TYPE, id, text })
export const completeCall = id => ({ type: types.COMPLETE_CALL, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
