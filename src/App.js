import './App.css';
import { getDic, getInk } from './redux/redusers';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <button onClick={props.getPlus}>+</button>
      <button onClick={props.getMinus}>-</button>
      <div>Результат:{props.result.num}</div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    result: state.rootReducer,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    getPlus: () => {
      dispatch(getInk())
    },
    getMinus: () => {
      dispatch(getDic())
    },
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);