import styles from'./App.module.css';
import { getDic, getInk } from './redux/redusers';
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
import { Component } from 'react';
import {getInitialThunkCreater} from './redux/initialReducer';

class App extends Component {
  componentDidMount(){
    this.props.getInitialThunkCreater()
  }

  render(){
    return (
    <div>
      <HeaderConteiner/>
      <div className={styles.App}>  
        <button onClick={this.props.getInk}>+</button>
        <button onClick={this.props.getDic}>-</button>
        <div>Результат:{this.props.result}</div>
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
}}

let mapStateToProps = (state) => {
  return {
    result: state.num.num,
  }
};

export default connect(mapStateToProps, {getInk, getDic, getInitialThunkCreater})(App)
