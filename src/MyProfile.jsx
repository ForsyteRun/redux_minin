import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import photo from './img/smile.jpg';
import editLogo from './img/edit.png';
import style from './MyProfile.module.css';
import { Formik, Field, Form } from 'formik';
import Preloader from "./Preloader";
import MyProfileAvaForm from "./MyProfileAvaForm";

const MyProfile = ({ userAvatar, imageProfile, isLoading, profileData}) => {
   console.log(profileData);
  const [editLogoForm, setEditLogoForm] = useState(false);
  const [editForm, setEditForm] = useState(false);

   useEffect(() => {
      setEditLogoForm(false)
   }, [imageProfile])

   if (isLoading) {
      return <Preloader />
   }
   return (
      <div className={style.conteiner}>
         <div className={style.logoConteiner}>
            <img src={imageProfile
               ? imageProfile
               : photo}  style={{width: '200px'}}/>
            <span className={style.editLogo} onClick={() => setEditLogoForm(!editLogoForm)} onBlur={console.log(111)}>
               <img src={editLogo} />
            </span>
            <MyProfileAvaForm editLogoForm ={editLogoForm} userAvatar={userAvatar}/>
         </div>
         <div>{
               Object.keys(profileData).map(el => {
                  editForm && <div className={style.title}>{el}:</div> 
                  })
            }
            <button>jjj</button>
         </div>
      </div>
   )
}

export default MyProfile;