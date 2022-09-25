import React from "react";
import { Navigate } from "react-router-dom";
import photo from './img/smile.jpg';
import style from './MyProfile.module.css';

const MyProfile = (props) => {

   if (!props.isAuth) {
      return <Navigate to='/auth' />
   };

   const onChangeAva = (e) => {
     let logo = e.target.files[0];
     console.log(logo);
   };

   return (
      <div className={style.conteiner}>
         <div>
            <img src={photo} style={{ width: '100px' }} />
         </div>
         <label className={style.button}>
            <input type={"file"} onChange={onChangeAva}/>
         </label>   
      </div>
   )
};

export default MyProfile;