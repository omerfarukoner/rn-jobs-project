const initialState = {
  jobs: [],
  isLoading: false
}

export const jobReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'JOB_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'JOB_SUCCESS':
      return {
        ...state,
        jobs: payload,
        isLoading: false
      }
    case 'JOB_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default jobReducer
