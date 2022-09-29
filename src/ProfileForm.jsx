import React, { useState, useEffect } from "react";
import style from './ProfileForm.module.css';
import { Formik, Field, Form } from 'formik';
import Preloader from "./Preloader";

const ProfileForm = ({ profileData }) => {

   const [editMode, setEditMode] = useState(true)

   const onSubmit = (values) => {
      console.log(values);
   }

   return (
      <div>
         <Formik
            initialValues={profileData}
            onSubmit={onSubmit}>
            {
               () => (
                  <Form className={style.conteiner}>  
                     {Object.keys(profileData).map(el => {
                        return <div>{el}:
                                  {el ? <Field name={el}  className={style.inputForm}/> : null} 
                               </div>
                     })}
                  
                     <button type="submit" onClick={() => setEditMode(!editMode)}>Submit</button>
                  </Form>
               )
            }
         </Formik>
      </div>
   )
}

export default ProfileForm;


{/* <Form>
                  <div>{props.values}:
                     {editMode && <Field />}
                  </div>
               </Form> */}
{/* <div>{props.values}:
                     {editMode && <Field/>}
                     </div> */}