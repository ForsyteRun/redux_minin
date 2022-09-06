import React, { Component } from "react"
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsNavigate = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export const withNavigate = (Compon) => {
   class NavigateComponent extends Component {
      render(){
         if(!this.props.isAuth) return <Navigate to='/auth'/>   
         return <Compon {...this.props}/>
      }
   } 

   const ConnectWithNavigate = connect(mapStateToPropsNavigate)(NavigateComponent)

   return ConnectWithNavigate;
}