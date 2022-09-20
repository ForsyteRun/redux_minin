import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { validate } from "./formik/validateSchema";
import styles from './News.module.css';

const initialValues = {
   status: '22'
};
export const NewsHooks = (props) => {

   const [editMode, setEditMode] = useState(true);
   const [status, setStatus] = useState(props.status)

   const activeEditMode = () => {
      setEditMode(false)
   };

   const deactivateEditMode = () => {
      setEditMode(true);
      props.updateNewsThunkCreater(status);
      // onSubmit()
   };

   const onChangeStatus = (e) => {
      setStatus(e.target.value)
   }

      return (
         <div>
            {editMode &&
               <div>
                  <span onDoubleClick={activeEditMode}>
                     {props.status}
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
                                 value ={status}
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