import { getAuth } from "../api/api";

let setAuth = 'SET_AUTH';

let initialState = {
   login: null,
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

export let authAC = (login, email) => {
   return{
      type: setAuth,
      login: login,
      email: email,
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

