const increment = 'INCREMENT';
const dicrement = 'DICREMENT';


let rootReducer = (state, action) => {
   switch (action.type) {
      case increment:
         state = state +1;
         return state;
      case dicrement:
         state = state -1;
         return state;
      default:
         return state;
   }
}

export let getInk = () => {
   return {
      type: 'INCREMENT'
   }
}

export let getDic = () => {
   return {
      type: 'DICREMENT'
   }
}






export default rootReducer;