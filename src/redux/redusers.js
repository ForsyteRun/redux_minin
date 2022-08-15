const increment = {type: 'INCREMENT'}
const dicrement = {type: 'DICREMENT'}


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

export default rootReducer;