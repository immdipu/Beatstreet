import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/UserReducer";
import axios from "axios";
import {
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCESS,
  USER_LOGIN_FAILED,
  LOGIN_FAILED_HANDLE,
  USER_SIGNUP_BEGIN,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_FINISHED,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_FINISHED,
} from "../Actions";

const userContext = React.createContext();

const initialState = {
  user_name: null,
  User_id: null,
  login_failed: false,
  login_success: false,
  login_loading: false,
  signup_loading: false,
  signup_success: false,
  signup_failed: false,
  forgot_password_loading: false,
  forgot_password_success: false,
  forgot_password_failed: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let UserEndPoints =
    "https://colorful-fly-attire.cyclic.app/beatstreet/api/users";

  const axiosInstance = axios.create({ withCredentials: true });

  const AutoLogin = async (token) => {
    try {
      const response = await axiosInstance.get(UserEndPoints + "isloggedin");
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (data) => {
    try {
      dispatch({ type: USER_LOGIN_BEGIN });
      const responses = await axiosInstance.post(
        UserEndPoints + "/login",
        data
      );
      const results = responses.data.data.user;
      console.log(responses);
      dispatch({ type: USER_LOGIN_SUCESS, payload: results });
      localStorage.setItem("token", "hello");
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILED });
      setTimeout(() => {
        dispatch({ dispatch: LOGIN_FAILED_HANDLE });
      }, 10000);
    }
  };

  const signUpUser = async (data) => {
    try {
      dispatch({ type: USER_SIGNUP_BEGIN });
      const responses = await axios.post(UserEndPoints + "/signup", data);
      const results = responses.data.data;
      dispatch({ type: USER_SIGNUP_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_SIGNUP_FAILED });
    }
    setTimeout(() => {
      dispatch({ type: USER_SIGNUP_FINISHED });
    }, 10000);
  };

  const forgotPassword = async (data) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_BEGIN });
      const response = await axios.post(
        UserEndPoints + "/forgotPassword",
        data
      );
      const results = response;
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
      console.log(results);
    } catch (error) {
      console.log(error);
      dispatch({ type: FORGOT_PASSWORD_FAILED });
    }
    setTimeout(() => {
      dispatch({ type: FORGOT_PASSWORD_FINISHED });
    }, 10000);
  };

  return (
    <userContext.Provider
      value={{ ...state, loginUser, signUpUser, forgotPassword, AutoLogin }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
