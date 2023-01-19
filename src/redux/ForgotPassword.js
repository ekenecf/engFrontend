export const ActionTypes = {
    FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
    FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
    FORGOTPASSWORD: 'FORGOTPASSWORD',
  }
  
  export const setLoadingData = () => ({
    type: ActionTypes.FETCH_DATA_LOADING,
  })

  export const setDataError = (data) => ({
    type: ActionTypes.FETCH_DATA_ERROR,
    payload: data,
  })

  export const setForgotPassword = (data) => ({
    type: ActionTypes.FORGOTPASSWORD,
    payload: data,
  })

  const initialState = {
    loading: false,
    error: '',
    forgotPassword: ''
  }
  
  const forgotPasswordReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.FETCH_DATA_LOADING:
        return {
          ...state,
          loading: true,
        }
      case ActionTypes.FORGOTPASSWORD:
        return {
          ...state,
          forgotPassword: payload,
          loading: false,
        }
      case ActionTypes.FETCH_DATA_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        }
      default:
        return state
    }
  }
  export default forgotPasswordReducer
  