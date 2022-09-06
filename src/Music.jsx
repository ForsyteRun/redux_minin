import React from "react";
import { Navigate } from "react-router-dom";

const Music = (props) => {
   
   if(!props.isAuth) return <Navigate to='/auth'/>

   return (
      <div>
         Example Redirect
      </div>
   )
}

export default Music;