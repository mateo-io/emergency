import * as types from '../constants/CallActions'

export const addUserPoste = (id, number) => ({ type: 'ADD_USER_POSTE', id, number })
export const addCall = text => ({ type: types.ADD_CALL, text })
export const deleteCall = id => ({ type: types.DELETE_CALL, id })
export const editType = (id, text) => ({ type: types.EDIT_TYPE, id, text })
export const updateDuration = (id, value) => ({ type: types.UPDATE_DURATION, id, value })
export const updateAudio = (id, text) => ({type: 'UPDATE_AUDIO', id, text})

export const updateDispatched = (id, date) => ({ type: types.UPDATE_DISPATCHED, id, date })
export const updateArrived = (id, date) => ({ type: types.UPDATE_ARRIVED, id, date })


export const completeCall = id => ({ type: types.COMPLETE_CALL, id })
export const openCall = id => ({ type: types.OPEN_CALL, id })
export const addPhoneInfo = (id, data) => ({ type: types.ADD_PHONE_INFO, id, data})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setPosteFilter = (filter) => ({
  type: 'SET_POSTE_FILTER',
  filter
})

export const setInitialDate = (date) => ({
  type: 'SET_INITIAL_DATE',
  date
})

export const setFinalDate = (date) => ({
  type: 'SET_FINAL_DATE',
  date
})

export const setBothDates = (initialDate, endDate) => ({
  type: types.SET_BOTH_DATES,
  initialDate, endDate
})
//CallComments
export const addComment = (id, text) => ({type: types.ADD_COMMENT, id, text })


export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
