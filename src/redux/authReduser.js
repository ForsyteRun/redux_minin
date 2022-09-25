import { AuthAPI, authMe } from "../api/api";

let setAuth = 'minin/authReduser/SET_AUTH';

let initialState = {
   email: null,
   login: null,
   id: null,
   rememberMe: false,
   isLoading: false,
   isAuth: false,
};

let authReduser = (state = initialState, action) => {
   switch (action.type) {
      case setAuth:
         return {
            ...state,
            ...action,
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

export const getHeaderThunkCreater = () => async (dispatch) => {
   let res = await authMe();
   if (res.data.resultCode === 0) {
      const { email, login, id } = res.data.data;
      dispatch(authAC(email, login, id, true))
   } else dispatch(authAC('not', 'not', 'not', false))
};

export const enterAuthThunkCreater = ({ login, password, rememberMe }, actions) => async (dispatch) => {
   let res = await AuthAPI.enterAuth(login, password, rememberMe);
   if (res.data.resultCode === 0) {
      console.log('move');
      dispatch(getHeaderThunkCreater());
      actions.setSubmitting(false);
   } else console.log('error');
};

export const outAuthThunkCreater = () => async (dispatch) => {
   await AuthAPI.outAuth()
   dispatch(authAC(null, null, false, false))
};
