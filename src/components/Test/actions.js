import { typeActions } from '~/utils/typeActions'

const { actions, types } = typeActions('counter', {
  addCounter: (data) => ({ payload: data }),
  setCounter: (data) => ({ payload: data }),
})

export { actions, types }
