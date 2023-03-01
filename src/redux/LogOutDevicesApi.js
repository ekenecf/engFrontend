import axios from "axios";
import { setLoadingData, setDataError, setLogoutResponse } from "./Login";

export const postLogoutDevices = (userDetail) => (dispatch) => {
  dispatch(setLoadingData());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(
      "https://wazobia.onrender.com/auth/logoutalldevices",
      userDetail,
      config
    )
    .then((response) => {
      dispatch(setLogoutResponse(response.data.message));
    })
    .catch((error) => {
      dispatch(setDataError(error.response.data.message));
    });
};
