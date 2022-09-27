import React from "react";
import { Navigate } from "react-router-dom";
import photo from './img/smile.jpg';
import style from './MyProfile.module.css';
import { Formik, Field, Form } from 'formik';

const MyProfile = ({userAvatar, isAuth, imageProfile}) => {
   // if (!props.isAuth) {
   //    return <Navigate to='/auth' />
   // };

   const onChangeAva = ({imageUrl}) => {
      userAvatar(imageUrl)
   };

   return (
      <div className={style.conteiner}>
         <div>
            <img src={imageProfile} style={{ width: '100px' }} />
         </div>
         <Formik
            initialValues={{imageUrl: ''}}
            onSubmit = {onChangeAva}
         >
            {
               () => (
                  <Form>
                     <Field type="text" name="imageUrl" placeholder="Enter Url">
                     </Field>
                     <button type="submit">Submit</button>
                  </Form>
               ) 
            }
         </Formik>
      </div>
   )
}

export default MyProfile;