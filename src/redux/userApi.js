import axios from 'axios'
import { setDataError } from './user'

export const getUser = (id) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .get(`https://wazobia.onrender.com/users/${id}`, config)
    .then((response) => {
      localStorage.setItem('serverResponse', JSON.stringify(response.data.data))
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}
