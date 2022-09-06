import React, { Component } from "react";
import Register from "./Register";
import {connect} from 'react-redux';
import { withNavigate } from "./hoc/withNavigate";
import { compose } from "redux";

class RegisterConteiner extends Component{
   
   render(){
      return(
         <Register {...this.props}/>
      )
   }
}

export default compose(
   connect(),
   withNavigate
   )(RegisterConteiner) 