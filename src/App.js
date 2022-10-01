import React, { lazy, Suspense, useEffect, useState } from 'react';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import StatusAPI from './StatusAPI';
import ProfileConteiner from './ProfileConteiner';
import HeaderConteiner from './HeaderConteiner';
import Dashboard from './Dashboard';
import Preferenses from './Preferenses';
import { getInitialThunkCreater } from './redux/initialReducer';
import Preloader from './Preloader';
import MyProfileConteiner from './MyProfileConteiner';
import NoPage from './NoPage';

const MusicConteiner = lazy(() => import('./MusicConteiner.jsx'));
const AuthConteiner = lazy(() => import('./AuthConteiner'));
const RegisterConteiner = lazy(() => import('./RegisterConteiner'));

const App = ({ getInitialThunkCreater, isInitial }) => {

  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1)
  };

  const dicrement = () => {
    setNum(num - 1)
  };

  useEffect(() => {
    getInitialThunkCreater();
    window.addEventListener('unhandledrejection', (event) => console.log(event))
    setTimeout(() => {
      window.removeEventListener ('unhandledrejection', (event) => console.log(event))
    }, 5000)
  })

  if (!isInitial) {
    return <Preloader/>;
  }

  return (
    <div>
      <HeaderConteiner />
      <div className={styles.App}>
        <button onClick={increment}>+</button>
        <button onClick={dicrement}>-</button>
        <div>Результат:{num}</div>
        <NavLink to='/status' style={{ margin: '20px' }}>Status</NavLink>
        <NavLink to='/register' style={{ margin: '20px' }}>Music</NavLink>
        <NavLink to='/music' style={{ margin: '20px' }}>Login</NavLink>
        <NavLink to='/myprofile'>My Profile</NavLink>
        <Routes>
          <Route exact path='/' element={<StatusAPI />} />
          <Route exact path='/status' element={<StatusAPI />} />
          <Route path='/profile/:id' element={<ProfileConteiner />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferenses' element={<Preferenses />} />
        </Routes>
        <Suspense fallback={<div><Preloader/></div>}>
          <Routes>
            <Route path='*' element={<NoPage/>} />
            <Route path="/music" element={<MusicConteiner />} />
            <Route path='/auth' element={<AuthConteiner />} />
            <Route path='/register' element={<RegisterConteiner />} />
            <Route path='/myprofile' element={<MyProfileConteiner/>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isInitial: state.init.isInitial,
  }
};

export default connect(mapStateToProps, { getInitialThunkCreater })(App)
