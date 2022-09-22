import { getHeaderThunkCreater } from "./authReduser";

let isInitial = 'minin/initialReduser/IS_INITIAL';

let initialState = {
   isInitial: false,
}

let initialReducer = (state = initialState, action) => {
   switch (action.type) {
      case isInitial:
         return {
            ...state,
            isInitial: true,
         }
      default:
         return state;
   }
}

export default initialReducer;

export let initialAC = () => {
   return {
      type: isInitial,
   }
};

export const getInitialThunkCreater = () => async (dispatch) => {
   dispatch(await getHeaderThunkCreater())
   dispatch(initialAC());
};
