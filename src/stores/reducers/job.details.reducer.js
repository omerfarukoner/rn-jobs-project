const initialState = {
  jobDetails: [],
  isLoading: false
}

export const jobDetailsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'JOB_DETAILS_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'JOB_DETAILS_SUCCESS':
      console.log('payload', payload)
      return {
        ...state,
        jobDetails: payload,
        isLoading: false
      }
    case 'JOB_DETAILS_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default jobDetailsReducer
