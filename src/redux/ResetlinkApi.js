import axios from 'axios'
import { setResetLink, setDataError } from './Resetlink'

export const linkToUser = (id) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(`https://wazobia.onrender.com/auth/resendLink/${id}`, config)
    .then((response) => {
      dispatch(setResetLink())
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}
