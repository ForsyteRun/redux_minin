import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import {getHeaderThunkCreater} from './redux/authReduser';
class HeaderConteiner extends Component {
  componentDidMount(){
    this.props.getHeaderThunkCreater()
  }
  
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    email: state.auth.email,
  }
}

export default connect(mapStateToProps, {getHeaderThunkCreater})(HeaderConteiner);