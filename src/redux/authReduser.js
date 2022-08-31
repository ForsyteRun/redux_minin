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
      login,
      email,
   }
}



