const url = 'https://api-uat.mrusta.com/v1/UAE-en/ustajobs/myjobsbypage/1'

export const jobRequest = () => {
  return {
    type: 'JOB_REQUEST'
  }
}

export const jobSuccess = job => {
  return {
    type: 'JOB_SUCCESS',
    payload: job
  }
}

export const jobFailed = () => {
  return {
    type: 'JOB_FAILED'
  }
}

export const getJobs = token => async dispatch => {
  console.log('tokenJOBACTİON', token)
  try {
    dispatch(jobRequest())

    await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
        // Accept: 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        const returnObj = responseJson
        console.log('dataJOBS', returnObj.Data)
        dispatch(jobSuccess(returnObj.Data))
        // console.log('returnObj', returnObj.access_job)
      })
      .catch(error => {
        dispatch(jobFailed())
      })
  } catch (error) {
    dispatch(jobFailed())
  }
}
