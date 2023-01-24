import axios from 'axios'
import { setsignUpLoadingData, setsignUpDataError, setsignUp } from './signUp'

const USERURL = 'https://wazobia.onrender.com/auth/register'

export const signUpUser = (userDetail) => (dispatch) => {
  dispatch(setsignUpLoadingData())
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(USERURL, userDetail, config)
    .then((response) => {
      dispatch(setsignUp(response.data.data))
      localStorage.setItem('serverResponse', JSON.stringify(response.data.data))
    })
    .catch((error) => {
      dispatch(setsignUpDataError(error.response.data.message.Message))
    })
}
