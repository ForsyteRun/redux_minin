import { createStore } from "./createStore";
import rootReducer  from "./redusers";

let store = createStore(rootReducer, 0);

export default store;

