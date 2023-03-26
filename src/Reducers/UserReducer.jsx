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

const User_Reducer = (state, action) => {
  //
  ////////////////////////////////////// LOGIN ACTION ///////////////////////

  if (action.type === USER_LOGIN_BEGIN) {
    return {
      ...state,
      login_loading: true,
      login_failed: false,
      login_success: false,
    };
  }

  if (action.type === USER_LOGIN_SUCESS) {
    const data = action.payload;
    return {
      ...state,
      login_loading: false,
      login_failed: false,
      login_success: true,
      user_name: data.name,
      User_id: data._id,
    };
  }

  if (action.type === USER_LOGIN_FAILED) {
    return {
      ...state,
      login_loading: false,
      login_failed: true,
      login_success: false,
    };
  }
  if (action.type === LOGIN_FAILED_HANDLE) {
    return {
      ...state,
      login_failed: false,
    };
  }

  //////////////////////////////////       SIGNUP ACTIONS      ////////////////////

  if (action.type === USER_SIGNUP_BEGIN) {
    return {
      ...state,
      signup_loading: true,
      signup_success: false,
      signup_failed: false,
    };
  }
  if (action.type === USER_SIGNUP_SUCCESS) {
    return {
      ...state,
      signup_loading: false,
      signup_success: true,
      signup_failed: false,
    };
  }
  if (action.type === USER_SIGNUP_FAILED) {
    return {
      ...state,
      signup_loading: false,
      signup_success: false,
      signup_failed: true,
    };
  }
  if (action.type === USER_SIGNUP_FINISHED) {
    return {
      ...state,
      signup_loading: false,
      signup_success: false,
      signup_failed: false,
    };
  }

  /////////////////////////////// FORGOT PASSWORD ACTIONS   ////////////////////////////

  if (action.type === FORGOT_PASSWORD_BEGIN) {
    return {
      ...state,
      forgot_password_loading: true,
      forgot_password_success: false,
      forgot_password_failed: false,
    };
  }
  if (action.type === FORGOT_PASSWORD_SUCCESS) {
    return {
      ...state,
      forgot_password_loading: false,
      forgot_password_success: true,
      forgot_password_failed: false,
    };
  }
  if (action.type === FORGOT_PASSWORD_FAILED) {
    return {
      ...state,
      forgot_password_loading: false,
      forgot_password_success: false,
      forgot_password_failed: true,
    };
  }
  if (action.type === FORGOT_PASSWORD_FINISHED) {
    return {
      ...state,
      forgot_password_loading: false,
      forgot_password_success: false,
      forgot_password_failed: false,
    };
  }
};

export default User_Reducer;
