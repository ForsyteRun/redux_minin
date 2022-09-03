import React, { Component } from "react";
import {connect} from 'react-redux';
import { getAuth } from "./api/api";
import Header from "./Header";
import {authAC} from './redux/authReduser';
class HeaderConteiner extends Component {
  componentDidMount(){
    getAuth()
      .then(response => {
        if(response.resultCode === true){
          let {login, email} = response;
          this.props.authAC(login, email);
        }
      })
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

export default connect(mapStateToProps, {authAC})(HeaderConteiner);