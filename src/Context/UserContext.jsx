import React, { useContext, useReducer, useState } from "react";
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
  AUTO_LOGIN_BEGIN,
  AUTO_LOGIN_SUCCESS,
  AUTO_LOGIN_FAILED,
  USER_DROP_DOWN_TOGGLE,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  USER_VERIFICATION,
  USER_VERIFICATION_BEGIN,
  USER_VERIFICATION_SUCCESS,
  USER_VERIFICATION_FAILED,
  RESEND_VERIFICATION_BEGIN,
  RESEND_VERIFICATION_SUCCESS,
  RESEND_VERIFICATAION_FAILED,
  PASSWORD_RESET_BEGIN,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PLAYLIST_SEND_SUCCESS,
  PLAYLIST_SEND_FAILED,
  PLAYLIST_SEND_BEGIN,
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
  user_drop_down: false,
  logout_failed: false,
  user_verification: false,
  verification_begin: false,
  verification_success: false,
  verificaiton_failed: false,
  resend_verification_success: false,
  resend_verification_failed: false,
  signup_email: null,
  auto_login_begin: false,
  password_reset_begin: false,
  password_reset_success: false,
  password_reset_failed: false,
  playlistSendSuccess: false,
  playlistSendFailed: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let UserEndPoints =
    "https://colorful-fly-attire.cyclic.app/beatstreet/api/users";

  const axiosInstance = axios.create({ withCredentials: true });

  const AutoLogin = async () => {
    try {
      dispatch({ type: AUTO_LOGIN_BEGIN });
      const response = await axiosInstance.get(UserEndPoints + "/isloggedin");
      const result = response.data.data.user;
      dispatch({ type: AUTO_LOGIN_SUCCESS, payload: result });
      return result;
    } catch (error) {
      dispatch({ type: AUTO_LOGIN_FAILED });
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
      dispatch({ type: USER_LOGIN_SUCESS, payload: results });
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILED });
      setTimeout(() => {
        dispatch({ dispatch: LOGIN_FAILED_HANDLE });
      }, 10000);
    }
  };

  const logoutUser = async () => {
    try {
      dispatch({ type: LOGOUT_USER_BEGIN });
      const response = await axiosInstance.get(UserEndPoints + "/login");
      dispatch({ type: LOGOUT_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_USER_FAILED });
    }
  };

  const userVerification = async (token) => {
    try {
      dispatch({ type: USER_VERIFICATION_BEGIN });
      const response = await axiosInstance.post(
        UserEndPoints + "/verify",
        token
      );
      const result = response.data;
      dispatch({ type: USER_VERIFICATION_SUCCESS, payload: result });
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_VERIFICATION_FAILED });
    }
  };

  const sendVerificationCode = async (data) => {
    try {
      dispatch({ type: RESEND_VERIFICATION_BEGIN });
      const response = await axiosInstance.post(
        UserEndPoints + "/verficationtoken",
        data
      );
      const result = response.data;
      dispatch({ type: RESEND_VERIFICATION_SUCCESS });
    } catch (error) {
      dispatch({ type: RESEND_VERIFICATAION_FAILED });
    }
  };

  const signUpUser = async (data) => {
    try {
      dispatch({ type: USER_SIGNUP_BEGIN });
      const responses = await axios.post(UserEndPoints + "/signup", data);
      const results = responses.data.data.email;
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: results });
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
    } catch (error) {
      console.log(error);
      dispatch({ type: FORGOT_PASSWORD_FAILED });
    }
    setTimeout(() => {
      dispatch({ type: FORGOT_PASSWORD_FINISHED });
    }, 10000);
  };

  const resetPassword = async (token, data) => {
    try {
      dispatch({ type: PASSWORD_RESET_BEGIN });
      const response = await axiosInstance.patch(
        UserEndPoints + `/resetPassword/${token}`,
        data
      );
      const results = response.data;
      dispatch({ type: PASSWORD_RESET_SUCCESS, payload: results });
    } catch (error) {
      dispatch({ type: PASSWORD_RESET_FAILED });
      console.log(error);
    }
  };

  const sendRecentPlayedSong = async (id, data) => {
    try {
      await axiosInstance.post(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/recentsongs/${id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  const sendFavoriteSong = async (id, data) => {
    try {
      await axiosInstance.post(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/favoritesongs/${id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  const sendNewPlaylist = async (id, data) => {
    dispatch({ type: PLAYLIST_SEND_BEGIN });
    try {
      const res = await axiosInstance.post(
        `https://colorful-fly-attire.cyclic.app/beatstreet/api/users/addnewplaylist/${id}`,
        data
      );
      const result = res.data;
      dispatch({ type: PLAYLIST_SEND_SUCCESS });
    } catch (error) {
      dispatch({ type: PLAYLIST_SEND_FAILED });
      console.log(error);
    }
  };

  const HandleUserDropDown = () => {
    dispatch({ type: USER_DROP_DOWN_TOGGLE });
  };

  const HandleVerificationBtn = () => {
    dispatch({ type: USER_VERIFICATION });
  };

  return (
    <userContext.Provider
      value={{
        ...state,
        loginUser,
        signUpUser,
        forgotPassword,
        AutoLogin,
        HandleUserDropDown,
        logoutUser,
        HandleVerificationBtn,
        userVerification,
        sendVerificationCode,
        resetPassword,
        sendRecentPlayedSong,
        sendFavoriteSong,
        sendNewPlaylist,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
