import { combineReducers } from 'redux'

import MuiListsReducer from './MuiLists/MuiListsReducer'
import FeedbacksReducer from './Feedbacks/FeedbacksReducer'

export default combineReducers({
  muiLists: MuiListsReducer,
  feedbacks: FeedbacksReducer,
})
