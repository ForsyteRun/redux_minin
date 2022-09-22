import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { validate } from "./formik/validateSchema";
import styles from './News.module.css';

const initialValues = {
   status: '22'
};

export const NewsHooks = ({updateNewsThunkCreater, status}) => {
   const [editMode, setEditMode] = useState(true);
   const [newStatus, setStatus] = useState(status);
   
   useEffect(() => {
      setStatus(status)
   }, [status])

   const activeEditMode = () => {
      setEditMode(false)
   };

   const deactivateEditMode = () => {
      setEditMode(true);
      updateNewsThunkCreater(newStatus);
   };

   const onChangeStatus = (e) => {
      setStatus(e.target.value)
   }

      return (
         <div>
            {editMode &&
               <div>
                  <span onDoubleClick={activeEditMode}>
                     {status}
                  </span>
               </div>
            }
            {!editMode &&
               <div style={{ alignSelf: 'center' }}>
                  <Formik
                     initialValues={initialValues}
                     validationSchema={validate}
                  >
                     {
                        ({ touched, errors }) => (
                           <Form name='status'>
                              <Field
                                 name='status'
                                 onBlur={deactivateEditMode} 
                                 onChange = {onChangeStatus}
                                 value ={newStatus}
                               />
                              {touched.status && <div className={styles.errors}>{errors.status}</div>}
                           </Form>
                        )
                     }
                  </Formik>
               </div>
            }
         </div>
      )
   }

export default NewsHooks;