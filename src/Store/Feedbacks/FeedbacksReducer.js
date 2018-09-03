const INITIAL_STATE = {
  feedbacks: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'saveFeedbacks':
      return {
        ...state,
        feedbacks: state.feedbacks.concat(action.feedbacks),
      }
    default:
      return state
  }
}
