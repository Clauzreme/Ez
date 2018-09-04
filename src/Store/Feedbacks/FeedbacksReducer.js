const INITIAL_STATE = {
  arr: [],
  lastDoc: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'fetchFeedbacksSuccess':
      return {
        ...state,
        arr: state.arr.concat(action.feedbacks),
        lastDoc: action.lastDoc,
      }
    case 'fetchFeedbacksFailure':
      return {
        ...state,
      }
    default:
      return state
  }
}
