import './App.css';
import rootReducer, { getDic, getInk } from './redux/redusers';
import store from './redux/state';


let getPlus = () => {
  let action = store.dispatch(getInk())
  rootReducer(store.getState, action)
}

let getMinus = () => {
  let action = store.dispatch(getDic())
  rootReducer(store.getState, action)
}

function App(props) {
debugger
  return (
    <div className="App">
      <button onClick={getPlus}>+</button>
      <button onClick={getMinus}>-</button>
      <div>Результат:{props.store}</div>
    </div>
  );
}

export default App;
