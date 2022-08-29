import React from "react";
import Preloader from "./Preloader";


let Profile = (props) => {

  if (!props.data){
    return <Preloader/>
  }

  return (
    <div>
      <div>{props.data.userData.name}</div>
      <div>{props.data.userData.email}</div>
     
    </div>
  )
}

export default Profile;