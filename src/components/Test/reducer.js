const INITIAL_STATE = {
  counter: 0
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_COUNTER':
      return { ...state, counter: state.counter + action.value }
    default:
      return state
  }
}
