import axios from 'axios'
import { setLoadingData, setDataError, setForgotPassword } from './ForgotPassword'

const USERURL = 'https://wazobia.onrender.com/users/forgotPassword'

export const postForgotPassword = (userDetail) => (dispatch) => {
  dispatch(setLoadingData())
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(USERURL, userDetail, config)
    .then((response) => {
        console.log(response)
      dispatch(setForgotPassword(response.data.message))
    })
    .catch((error) => {
        console.log(error)
      dispatch(setDataError(error.response.data.message))
    })
}
