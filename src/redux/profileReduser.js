import { getUserProfile } from "../api/api";

let set_Profile = 'minin/profileReduser/SET_PROFILE';

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

export const getUserProfileThunkCreator = (match) => async (dispatch) => {
      let res = await getUserProfile(match)
          dispatch(setProfileAC(res))
};

 