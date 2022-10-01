import React, { useState, useEffect } from "react";
import photo from './img/smile.jpg';
import editLogo from './img/edit.png';
import style from './MyProfile.module.css';
import Preloader from "./Preloader";
import MyProfileAvaForm from "./MyProfileAvaForm";
import ProfileForm from "./ProfileForm";
import cn from 'classnames';

const MyProfile = ({ userAvatar, imageProfile, isLoading, profileData, upLoadProfileData}) => {

  const [editLogoForm, setEditLogoForm] = useState(false);

   useEffect(() => {
      setEditLogoForm(false)
   }, [imageProfile])

   if (isLoading) {
      return <Preloader />
   }
   return (
      <div className={cn(style.conteiner)}>
         <div className={cn(style.logoConteiner)}>
            <img src={imageProfile
               ? imageProfile
               : photo}  style={{width: '200px'}}/>
            <span className={cn(style.editLogo)} onClick={() => setEditLogoForm(!editLogoForm)} onBlur={console.log(111)}>
               <img src={editLogo} />
            </span>
            <MyProfileAvaForm editLogoForm ={editLogoForm} userAvatar={userAvatar}/>
         </div>
         <div className={cn(style.rightBlock)}>
            <ProfileForm profileData={profileData} upLoadProfileData={upLoadProfileData}/>
         </div>
      </div>
   )
}

export default MyProfile;