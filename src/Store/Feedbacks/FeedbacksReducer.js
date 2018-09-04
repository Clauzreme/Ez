const INITIAL_STATE = {
  arr: [],
  lastDoc: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Feedbacks//fetchFeedbacksSuccess':
      return {
        ...state,
        arr: state.arr.concat(action.newFeedbacks),
        lastDoc: action.newLastDoc,
      }
    case 'Feedbacks//fetchFeedbacksFailure':
      return {
        ...state,
      }
    default:
      return state
  }
}
