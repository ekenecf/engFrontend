import axios from 'axios'
import { setLoadingData, setCreatePassword } from './NewPassword'

export const postResetPassword = (userDetail, token) => (dispatch) => {
  dispatch(setLoadingData())
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(
      `https://wazobia.onrender.com/users/resetpassword/${token}`,
      userDetail,
      config,
    )
    .then((response) => {
      dispatch(setCreatePassword(response.data.status))
    })
    .catch((error) => {
      console.log('issue', error)
    })
}
