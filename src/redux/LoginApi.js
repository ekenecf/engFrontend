import axios from 'axios'
import { setLoadingData, setDataError, setCreateUser } from './Login'

const USERURL = 'https://wazobia.onrender.com/auth/login/'

export const postLoginUser = (userDetail) => (dispatch) => {
  dispatch(setLoadingData())
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(USERURL, userDetail, config)
    .then((response) => {
      dispatch(setCreateUser(response.data.data))
      localStorage.setItem('serverResponse', JSON.stringify(response.data.data))
      localStorage.setItem('getText', JSON.stringify(response.data.data.text))
    })
    .catch((error) => {
      dispatch(setDataError(error.response.data.message))
    })
}

export const postLogoutUser = (id) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(`https://wazobia.onrender.com/auth/logout/${id}`, config)
    .then((response) => {
      localStorage.removeItem('serverResponse')
      localStorage.removeItem('getText')
    })
    .catch((error) => {
      dispatch(setDataError(error.response.data.message))
    })
}
