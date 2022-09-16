import { AuthAPI, getAuth } from "../api/api";

let setAuth = 'SET_AUTH';

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
            isAuth: true,
         }
      default:
         return state;
   }
}

export default authReduser;

export let authAC = (login, password, rememberMe) => {
   return{
      type: setAuth,
      login, 
      password, 
      rememberMe,
   }
}

export const getHeaderThunkCreater = () => {
   return (dispatch) => {
      getAuth()
      .then(response => {
        if(response.resultCode === true){
          let {login, email} = response;
          dispatch(authAC(login, email))
        }
      })
      .catch(new Error('error getHeaderThunkCreater'))
   }
}

export const enterAuthThunkCreater = ({login, password, rememberMe}, actions) => {
   return (dispatch) => {
      AuthAPI.enterAuth(login, password, rememberMe)
      .then( res => {
         const{login, password, rememberMe} = res.data;
         dispatch(authAC(login, password, rememberMe))
         actions.setSubmitting(false);
      })
   }
}
