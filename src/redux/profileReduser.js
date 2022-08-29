let set_Profile = 'SET_PROFILE';

let initialState = {
   userData: 5,
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

