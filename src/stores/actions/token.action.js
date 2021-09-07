const url = 'https://api-uat.mrusta.com/token'

export const tokenRequest = () => {
  return {
    type: 'TOKEN_REQUEST'
  }
}

export const tokenSuccess = token => {
  return {
    type: 'TOKEN_SUCCESS',
    payload: token
  }
}

export const tokenFailed = () => {
  return {
    type: 'TOKEN_FAILED'
  }
}

export const getTokenRequest = (username, password) => async dispatch => {
  try {
    dispatch(tokenRequest())

    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=password&username=${username}&password=${password}`
    })
      .then(response => response.json())
      .then(responseJson => {
        const returnObj = responseJson
        // console.log('data', returnObj.access_token)
        dispatch(tokenSuccess(returnObj.access_token))
        return returnObj.access_token
      })
      .catch(error => {
        dispatch(tokenFailed())
        return false
      })
  } catch (error) {
    dispatch(tokenFailed())
    return false
  }
}
