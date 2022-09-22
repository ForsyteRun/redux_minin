import { AuthAPI, authMe} from "../api/api";

let setAuth = 'minin/authReduser/SET_AUTH';

let initialState = {
   login: null,
   password: null, 
   rememberMe: false,
   email: null,
   isLoading: false,
   isAuth: false,
}

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
}

export default authReduser;

export let authAC = (login, password, rememberMe, isAuth) => {
   return{
      type: setAuth,
      login, 
      password, 
      rememberMe,
      isAuth,
   }
}

export const getHeaderThunkCreater = () => async (dispatch) => {
      let res = await authMe()
      const{login, password, rememberMe} = res.data;
      dispatch(authAC(login, password, rememberMe, true))
};

export const enterAuthThunkCreater = ({login, password, rememberMe}, actions) => async (dispatch) => {
      let res = await AuthAPI.enterAuth(login, password, rememberMe)
         const{login, password, rememberMe} = res.data;
         dispatch(authAC(login, password, rememberMe, true))
         actions.setSubmitting(false);
};


export const outAuthThunkCreater = () => async (dispatch) => {
      await AuthAPI.outAuth()
      dispatch(authAC(null, null, false, false))
};
