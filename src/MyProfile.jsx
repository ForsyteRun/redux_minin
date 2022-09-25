import React from "react";
import { Navigate } from "react-router-dom";

const MyProfile = (props) => {

   if(!props.isAuth){
      return <Navigate to='/auth'/>
   }
   return (
      <div>
       {
         props.isAuth ? <span>You autorized</span> : <span>Fail autorisation</span>
       }  
      </div>
   )
}

export default MyProfile;