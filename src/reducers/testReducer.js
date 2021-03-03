export const testReducer = (
  state = { testReducer: 'Hello from test Reducer ' },
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}
