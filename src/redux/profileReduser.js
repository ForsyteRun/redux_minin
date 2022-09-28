import { getUserProfile, profileAPI } from "../api/api";
import { toggleLoading } from "./statusReduser";

let set_Profile = 'minin/profileReduser/SET_PROFILE';
let set_Img_Profile = 'minin/profileReduser/set_Img_Profile';
let get_Data_Profile = 'minin/profileReduser/getDataProfile';

let initialState = {
   userData: 6,
   imageProfile: '',
   lookinForJob: false,
   lookinForJobDiiscription: '',
   fullName: '',
   contacts: {
       vk: '',
       gitHub: '',
       facebook: '',
       instagram: ''
      },
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
      case get_Data_Profile:
         return {
            ...state, ...action.data
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

const getDataProfile = (data) => {
   return {
      type: get_Data_Profile,
      data,
   }
}

export const getUserProfileThunkCreator = (match) => async (dispatch) => {
   let res = await getUserProfile(match)
   dispatch(setProfileAC(res))
};

export const userAvatar = (url) => async (dispatch) => {
   dispatch(toggleLoading(true))
   let res = await profileAPI.loadAvatar(url);
   try {
      dispatch(toggleLoading(false))
      dispatch(setImgProfile(res.data.image.big))
   } catch (error) {
      console.log('error userAvatar');
   }
};

export const firstLoadLogoProfile = () => async (dispatch) => {
   dispatch(toggleLoading(true))
   let res = await profileAPI.getAvatar()
   try {
      dispatch(toggleLoading(false))
      dispatch(setImgProfile(res.data.image.big))
   } catch (error) {
      console.log('error userAvatar');
   }
};

export const getProfileData = () => async (dispatch) => {
   debugger;
   let res = await profileAPI.getAvatar()
   try {
      getDataProfile(res.data)
   } catch (error) {
      console.log('getProfileData error');
   }
};




// getAvatar