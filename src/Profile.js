import React from "react";
import Preloader from "./Preloader";

let Profile = ({data}) => {

  if (!data){
    return <Preloader/>
  }

  return (
    <div>
      <div>{data.userData.name}</div>
      <div>{data.userData.email}</div>
    </div>
  )
}

export default Profile;