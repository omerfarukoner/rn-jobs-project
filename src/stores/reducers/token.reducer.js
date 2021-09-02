const initialState = {
  token: null,
  isLoading: false
}

export const tokenReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'TOKEN_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'TOKEN_SUCCESS':
      return {
        ...state,
        token: payload,
        isLoading: false
      }
    case 'TOKEN_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default tokenReducer
