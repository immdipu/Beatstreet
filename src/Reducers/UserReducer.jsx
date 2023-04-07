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

  if (action.type === AUTO_LOGIN_BEGIN) {
    return {
      ...state,
      login_failed: false,
      login_success: false,
      auto_login_begin: true,
    };
  }

  if (action.type === AUTO_LOGIN_SUCCESS) {
    const data = action.payload;
    return {
      ...state,
      login_loading: false,
      login_failed: false,
      auto_login_begin: false,
      login_success: true,
      user_name: data.name,
      User_id: data._id,
    };
  }

  if (action.type === AUTO_LOGIN_FAILED) {
    return {
      ...state,
      login_loading: false,
      auto_login_begin: false,
      login_failed: false,
      login_success: false,
      user_name: null,
      User_id: null,
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
    const data = action.payload;
    return {
      ...state,
      signup_loading: false,
      signup_success: true,
      signup_failed: false,
      user_verification: true,
      signup_email: data,
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

  //////////////////////////// LOG OUT ACTION ///////////////////////
  if (action.type === LOGOUT_USER_BEGIN) {
    return { ...state };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      login_loading: false,
      login_failed: false,
      login_success: false,
      user_name: null,
      User_id: null,
      logout_failed: false,
    };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      logout_failed: true,
    };
  }

  /////////////////////////// USER VERIFICATION ////////////////////////
  if (action.type === USER_VERIFICATION_BEGIN) {
    return {
      ...state,
      verification_begin: true,
      verification_success: false,
      verificaiton_failed: false,
    };
  }

  if (action.type === USER_VERIFICATION_SUCCESS) {
    return {
      ...state,
      verification_begin: false,
      verification_success: true,
      verificaiton_failed: false,
    };
  }
  if (action.type === USER_VERIFICATION_FAILED) {
    return {
      ...state,
      verification_begin: false,
      verification_success: false,
      verificaiton_failed: true,
    };
  }

  ///////////////////////// RESEND VERIFICATION TOKEN ///////////////////

  if (action.type === RESEND_VERIFICATION_BEGIN) {
    return {
      ...state,
      verification_begin: true,
      verification_success: false,
      verificaiton_failed: false,
      resend_verification_success: false,
      resend_verification_failed: false,
    };
  }
  if (action.type === RESEND_VERIFICATION_SUCCESS) {
    return {
      ...state,
      verification_begin: false,
      verification_success: false,
      verificaiton_failed: false,
      resend_verification_success: true,
      resend_verification_failed: false,
    };
  }
  if (action.type === RESEND_VERIFICATAION_FAILED) {
    return {
      ...state,
      verification_begin: false,
      verification_success: false,
      verificaiton_failed: false,
      resend_verification_success: false,
      resend_verification_failed: true,
    };
  }

  ///////////////////////// PASSWORD RESET FUNCTIONS ////////////////////////////////

  if (action.type === PASSWORD_RESET_BEGIN) {
    return {
      ...state,
      password_reset_begin: true,
      password_reset_success: false,
      password_reset_failed: false,
    };
  }

  if (action.type === PASSWORD_RESET_SUCCESS) {
    return {
      ...state,
      password_reset_begin: false,
      password_reset_success: true,
      password_reset_failed: false,
    };
  }

  if (action.type === PASSWORD_RESET_FAILED) {
    return {
      ...state,
      password_reset_begin: false,
      password_reset_success: false,
      password_reset_failed: true,
    };
  }

  /////////////////////////////////// BUTTON FUNCTIONS ////////////////////////////////

  if (action.type === USER_DROP_DOWN_TOGGLE) {
    return {
      ...state,
      user_drop_down: !state.user_drop_down,
    };
  }

  if (action.type === USER_VERIFICATION) {
    return {
      ...state,
      user_verification: false,
    };
  }

  //////////////////////////////////////////////////////
  if (action.type === PLAYLIST_SEND_BEGIN) {
    return {
      ...state,
      playlistSendSuccess: false,
      playlistSendFailed: false,
    };
  }
  if (action.type === PLAYLIST_SEND_SUCCESS) {
    return {
      ...state,
      playlistSendSuccess: true,
      playlistSendFailed: false,
    };
  }
  if (action.type === PLAYLIST_SEND_FAILED) {
    return {
      ...state,
      playlistSendSuccess: false,
      playlistSendFailed: true,
    };
  }
};

export default User_Reducer;
