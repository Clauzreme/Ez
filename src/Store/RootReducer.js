import { combineReducers } from 'redux'

import MuiListsReducer from './MuiLists/MuiListsReducer'

export default combineReducers({
  muiLists: MuiListsReducer,
})
