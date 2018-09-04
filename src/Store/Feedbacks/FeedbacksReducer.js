const INITIAL_STATE = {
  arr: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'saveFeedbacks':
      return {
        ...state,
        arr: state.arr.concat(action.feedbacks),
      }
    default:
      return state
  }
}
