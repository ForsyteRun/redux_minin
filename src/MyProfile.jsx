import React from "react";
import { Navigate } from "react-router-dom";
import photo from './img/smile.jpg';

const MyProfile = (props) => {
   
   if(!props.isAuth){
      return <Navigate to='/auth'/>
   }

   return (
      <div>
       {
         props.isAuth ? <span>You autorized</span> : <span>Fail autorisation</span>
       }  
       <img src={photo}/>
      </div>
   )
}

export default MyProfile;