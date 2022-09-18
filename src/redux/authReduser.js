import { AuthAPI, authMe} from "../api/api";

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

export const getHeaderThunkCreater = () => {
   return (dispatch) => {
      authMe()
      .then(response => {
         const{login, password, rememberMe} = response.data;
        dispatch(authAC(login, password, rememberMe, true))
      })
      .catch(new Error('error getHeaderThunkCreater'))
   }
}

export const enterAuthThunkCreater = ({login, password, rememberMe}, actions) => {
   return (dispatch) => {
      AuthAPI.enterAuth(login, password, rememberMe)
      .then( res => {
         const{login, password, rememberMe} = res.data;
         dispatch(authAC(login, password, rememberMe, true))
         actions.setSubmitting(false);
      })
   }
}

export const outAuthThunkCreater = () => {
   return (dispatch) => {
      AuthAPI.outAuth()
      .then( () => {
         dispatch(authAC(null, null, false, false))
      })
      .catch(console.log('No id=1'))
   }
}
