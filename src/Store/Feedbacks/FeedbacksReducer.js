const INITIAL_STATE = {
  arr: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'saveFeedbacks':
      return {
        ...state,
        arr: state.feedbacks.concat(action.feedbacks),
      }
    default:
      return state
  }
}
