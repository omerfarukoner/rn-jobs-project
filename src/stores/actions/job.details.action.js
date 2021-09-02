const url = 'https://api-uat.mrusta.com/v1/UAE-en/job/detail/'

export const jobDetailsRequest = () => {
  return {
    type: 'JOB_DETAILS_REQUEST'
  }
}

export const jobDetailsSuccess = jobDetails => {
  return {
    type: 'JOB_DETAILS_SUCCESS',
    payload: jobDetails
  }
}

export const jobDetailsFailed = () => {
  return {
    type: 'JOB_DETAILS_FAILED'
  }
}

export const getJobDetails = (token, id) => async dispatch => {
  try {
    dispatch(jobDetailsRequest())

    await fetch(url + '394713982939', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        const returnObj = responseJson

        dispatch(jobDetailsSuccess(returnObj.Data))
        // console.log('returnObj', returnObj.access_jobDetails)
      })
      .catch(error => {
        dispatch(jobDetailsFailed())
      })
  } catch (error) {
    dispatch(jobDetailsFailed())
  }
}
