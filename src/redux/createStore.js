export function createStore(rootReducer, initialState){
   let state =rootReducer(initialState, {type: '__INIT__'});
   let subscribers = [];
   return{
      //action === {type: 'INCREMENT'}
      dispatch(action){
         state = rootReducer(state, action);          
         subscribers.forEach(el => el());
      },
      subscribe(callback){
         subscribers.push(callback);
      },
      getState(){
         return state;
      }
   }
}