import { getUserProfile } from "../api/api";

let set_Profile = 'SET_PROFILE';

let initialState = {
   userData: 6,
}

let profileReduser = (state = initialState, action) => {
     switch (action.type) {
      case set_Profile:
         return {
            ...state,
            userData: action.data
         }
   
      default:
         return state;
   }
}

export default profileReduser;

export let setProfileAC = (data) => {
   return {
      type: set_Profile,
      data: data,
   }
}

export const getUserProfileThunkCreator = (match) => {
   return (dispatch) => {
      getUserProfile(match)
      .then(response => {
          dispatch(setProfileAC(response))
      })
      .catch(new Error('Error'))
   }
}

 