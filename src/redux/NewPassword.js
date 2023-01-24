export const ActionTypes = {
    FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
    FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
    CREATEPASSWORD: 'CREATEPASSWORD',
  }
  
  export const setLoadingData = () => ({
    type: ActionTypes.FETCH_DATA_LOADING,
  })
  
  export const setCreatePassword = (data) => ({
    type: ActionTypes.CREATEPASSWORD,
    payload: data,
  })
  
  const initialState = {
    loading1: false,
    passwordInput1: '',
  }
  
  const newPasswordReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.FETCH_DATA_LOADING:
        return {
          ...state,
          loading1: true,
        }
      case ActionTypes.CREATEPASSWORD:
        return {
          ...state,
          passwordInput1: payload,
          loading1: false,
        }
      default:
        return state
    }
  }
  export default newPasswordReducer
  