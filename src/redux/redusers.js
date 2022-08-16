const increment = 'INCREMENT';
const dicrement = 'DICREMENT';


let rootReducer = (state, action) => {
   switch (action.type) {
      case increment:
        return state = state +1;
      case dicrement:
        return state = state -1;
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