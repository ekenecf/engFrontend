import axios from 'axios'
import { setDataError, getallText, createText } from './text'

export const getTexts = (id) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .get(`https://wazobia.onrender.com/text/${id}`, config)
    .then((response) => {
      dispatch(getallText(response.data.data.UserText))
      localStorage.setItem(
        'getText',
        JSON.stringify(response.data.data.UserText),
      )
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}

export const postText = (textValues, id) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(`https://wazobia.onrender.com/text/${id}`, textValues, config)
    .then((response) => {
      dispatch(createText(response))
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}

export const deleteText = (id, textId) => (dispatch) => {
  axios
    .delete(`https://wazobia.onrender.com/text/${id}/${textId}`)
    .then((response) => {
      console.log('Expecting res', response)
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}

export const editText = (textValues, userId, textId) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .patch(
      `https://wazobia.onrender.com/text/${userId}/${textId}`,
      textValues,
      config,
    )
    .then((response) => {
      dispatch(createText(response))
    })
    .catch((error) => {
      dispatch(setDataError(error))
    })
}
