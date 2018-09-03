const INITIAL_STATE = {
  drawerList: [false],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setDrawerList':
      return {
        ...state,
        drawerList: action.drawerList,
      }
    default:
      return state
  }
}
