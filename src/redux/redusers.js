const increment = 'INCREMENT';
const dicrement = 'DICREMENT';

let InitialState = {
   num: 0,
}

let rootReducer = (state = InitialState, action) => {
   switch (action.type) {
      case increment:
        return state.num +1;
      case dicrement:
        return state.num -1;
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