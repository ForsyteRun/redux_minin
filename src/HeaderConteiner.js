import axios from "axios";
import React, { Component } from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import {authAC} from './redux/authReduser';

class HeaderConteiner extends Component {
  componentDidMount(){
      axios.get('https://630f1ba6498924524a860c3f.mockapi.io/auth/1')
      .then(response => {
        if(response.data.resultCode === true){
          let {login, email} = response.data;
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