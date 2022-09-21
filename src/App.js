import React, { useEffect, useState } from 'react';
import styles from'./App.module.css';
import {connect} from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import StatusAPI from './StatusAPI';
import ProfileConteiner from './ProfileConteiner';
import HeaderConteiner from './HeaderConteiner';
import AuthConteiner from './AuthConteiner';
import MusicConteiner from './MusicConteiner';
import RegisterConteiner from './RegisterConteiner';
import Dashboard from './Dashboard';
import Preferenses from './Preferenses';
import {getInitialThunkCreater} from './redux/initialReducer';

const App = (props) => {
  
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1)
  };

  const dicrement = () => {
    setNum(num - 1)
  };
  
  useEffect(() => {
    props.getInitialThunkCreater();
  })
  
  if(!props.isInitial){
      return 7777
  }

    return (
    <div>
      <HeaderConteiner/>
      <div className={styles.App}>  
        <button onClick={increment}>+</button>
        <button onClick={dicrement}>-</button>
        <div>Результат:{num}</div>
        <NavLink to='/status' style={{margin:'20px'}}>Status</NavLink>
        <NavLink to='/music'>Music</NavLink>
        <NavLink to='/register' style={{margin: '20px'}}>Register</NavLink>
        <Routes>        
                <Route path='/status' element = { <StatusAPI/>}/>
                <Route path='/profile/:id' element = { <ProfileConteiner/>}/>
                <Route path='/auth' element = { <AuthConteiner/>}/>
                <Route path='/music' element = { <MusicConteiner/>}/>
                <Route path='/register' element = {<RegisterConteiner/>}/>
                <Route path='/dashboard' element = {<Dashboard/>}/>
                <Route path='/preferenses' element = {<Preferenses/>}/>
        </Routes>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isInitial: state.init.isInitial,
  }
};

export default connect(mapStateToProps, {getInitialThunkCreater})(App)
