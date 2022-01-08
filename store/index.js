import { createStore } from 'redux'

const initialState = {
  theme: 'light'
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  if (action.type === 'TOGGLE')
    newState.theme = newState.theme === 'light' ? 'dark' : 'light'
  return newState
}

const store = createStore(reducer)

export default store
