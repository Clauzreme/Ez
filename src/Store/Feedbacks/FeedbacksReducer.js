const INITIAL_STATE = {
  arr: [],
  lastDoc: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'saveFeedbacks':
      return {
        ...state,
        arr: state.arr.concat(action.feedbacks),
        lastDoc: action.lastDoc,
      }
    default:
      return state
  }
}
