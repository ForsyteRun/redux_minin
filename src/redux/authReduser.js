import { AuthAPI, authMe } from "../api/api";

let setAuth = 'minin/authReduser/SET_AUTH';

let initialState = {
   login: null,
   password: null,
   rememberMe: false,
   email: null,
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

export let authAC = (login, password, rememberMe, isAuth) => {
   return {
      type: setAuth,
      login,
      password,
      rememberMe,
      isAuth,
   }
};

export const getHeaderThunkCreater = () => async (dispatch) => {
   let res = await authMe();
   if(res.data.resultCode === 0){
      const { login, password, rememberMe } = res.data.data;
      dispatch(authAC(login, password, rememberMe, true))
   } dispatch(authAC('not', 'not', 'not', false))

};

export const enterAuthThunkCreater = ({ login, password, rememberMe }, actions) => async (dispatch) => {
   await AuthAPI.enterAuth(login, password, rememberMe);
   dispatch(authAC(login, password, rememberMe, true))
   actions.setSubmitting(false);
};


export const outAuthThunkCreater = () => async (dispatch) => {
   await AuthAPI.outAuth()
   dispatch(authAC(null, null, false, false))
};
