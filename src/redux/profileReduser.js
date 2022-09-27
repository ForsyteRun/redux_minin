import { getUserProfile, profileAPI } from "../api/api";

let set_Profile = 'minin/profileReduser/SET_PROFILE';
let set_Img_Profile = 'minin/profileReduser/set_Img_Profile';

let initialState = {
   userData: 6,
   imageProfile: ''
}

let profileReduser = (state = initialState, action) => {
   switch (action.type) {
      case set_Profile:
         return {
            ...state,
            userData: action.data
         }
      case set_Img_Profile:
         return {
            ...state, imageProfile: action.url
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
};

let setImgProfile = (url) => {
   return {
      type: set_Img_Profile,
      url,
   }
};

export const getUserProfileThunkCreator = (match) => async (dispatch) => {
   let res = await getUserProfile(match)
   dispatch(setProfileAC(res))
};

export const userAvatar = (url) => async (dispatch) => {
   let res = await profileAPI.loadAvatar(url);
   try {
      dispatch(setImgProfile(res.data.image.big))
   } catch (error) {
      console.log('error userAvatar');
   }
};