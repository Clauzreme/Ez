import { combineReducers } from 'redux'

import MuiListsReducer from './MuiLists/MuiListsReducer'
import FeedbacksReducer from './Feedbacks/FeedbacksReducer'
import SubmitFeedbackReducer from './SubmitFeedback/SubmitFeedbackReducer'

export default combineReducers({
  muiLists: MuiListsReducer,
  feedbacks: FeedbacksReducer,
  submitFeedback: SubmitFeedbackReducer,
})
