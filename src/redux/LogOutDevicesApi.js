import axios from 'axios'
import { setLoadingData, setDataError, setLogoutResponse } from './Login'

export const postLogoutDevices = (userDetail) => (dispatch) => {
  dispatch(setLoadingData())
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post('http://127.0.0.1:8080/auth/logoutalldevices', userDetail, config)
    .then((response) => {
      dispatch(setLogoutResponse(response.data.message))
      console.log(response)
    })
    .catch((error) => {
      dispatch(setDataError(error.response.data.message))
      console.log('Catch error', error)
    })
}
