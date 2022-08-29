import styles from'./App.module.css';
import { getDic, getInk } from './redux/redusers';
import {connect} from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import StatusAPI from './StatusAPI';
import ProfileConteiner from './ProfileConteiner';

function App(props) {
  return (
    <div className={styles.App}>
      <button onClick={props.getPlus}>+</button>
      <button onClick={props.getMinus}>-</button>
      <div>Результат:{props.result}</div>
      <NavLink to='/status'>Status</NavLink>
      <Routes>        
              <Route path='/status' element = { <StatusAPI/>}/>
              <Route path='/profile/:id' element = { <ProfileConteiner/>}/>
      </Routes>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    result: state.num.num,
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