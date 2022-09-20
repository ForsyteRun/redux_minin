import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import {outAuthThunkCreater} from './redux/authReduser';
import { getEmail, getIsAuth, getLogin } from "./redux/selectors";
class HeaderConteiner extends Component {

  render() {
    console.log('render');
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    login: getLogin(state),
    isAuth: getIsAuth(state),
    email: getEmail(state),
  }
}

export default  connect(mapStateToProps, {outAuthThunkCreater})(HeaderConteiner);