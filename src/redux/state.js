import { createStore } from "redux";
import rootReducer  from "./redusers";


let store = createStore(rootReducer, 0);


window.store = store;

export default store;

