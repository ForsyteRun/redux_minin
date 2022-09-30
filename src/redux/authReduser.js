import { AuthAPI, authMe, securityApi } from "../api/api";

let setAuth = 'minin/authReduser/SET_AUTH';
let get_Captcha = 'minin/authReduser/get_Captcha';

let initialState = {
   email: null,
   login: null,
   id: null,
   rememberMe: false,
   isLoading: false,
   isAuth: false,
   captcha: null
};

let authReduser = (state = initialState, action) => {
   switch (action.type) {
      case setAuth:
         return {
            ...state,
            ...action,
         }
      case get_Captcha:
         return {
            ...state, captcha: action.url
         }
      default:
         return state;
   }
};

export default authReduser;

export let authAC = (email, login, id, isAuth) => {
   return {
      type: setAuth,
      email,
      login,
      id,
      isAuth,
   }
};

export const getCaptcha = (url) => {
   return{
      type: get_Captcha,
      url
   }
}

export const getHeaderThunkCreater = () => async (dispatch) => {
   let res = await authMe();
   if (res.data.resultCode === 0) {
      const { email, login, id } = res.data.data;
      dispatch(authAC(email, login, id, true))
   } else dispatch(authAC('not', 'not', 'not', false))
};

export const enterAuthThunkCreater = ({ login, password, rememberMe, captchaResponse }, action) => async (dispatch) => {
   let res = await AuthAPI.enterAuth(login, password, rememberMe, captchaResponse);
   if (res.data.resultCode === 0) {
      dispatch(getHeaderThunkCreater());
      action.setSubmitting(false);
   } else {
      dispatch(getCaptchaThunk());
   } 
};

export const outAuthThunkCreater = () => async (dispatch) => {
   await AuthAPI.outAuth()
   dispatch(authAC(null, null, false, false))
};

export const getCaptchaThunk = () => async (dispatch) => {
   const res = await securityApi.getCaptcha();
   dispatch(getCaptcha(res.data.url));
};