import React, { useState } from "react";
import style from './ProfileForm.module.css';
import { Formik, Field, Form } from 'formik';

const ProfileForm = ({ profileData, upLoadProfileData }) => {
   
   const [editMode, setEditMode] = useState(false)

   const onSubmit = (values) => {
      upLoadProfileData(values)
   };

   return (
      <div>
         <Formik
            enableReinitialize={true}
            initialValues={profileData}
            onSubmit={onSubmit}>
            {
               (props) => (
                  <Form className={style.conteiner}>  
                     {Object.keys(profileData).map(el => {
                        // <ProfileFormInput el={el}/>
                        return <div>{el}:
                                  {editMode 
                                  ? <Field name={el} keys={el} className={style.inputForm}/> 
                                  : <span className={style.text}>{props.values[el]}</span>} 
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