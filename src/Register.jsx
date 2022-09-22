import React from "react";
import style from './Register.module.css'
import { Formik, Form, Field } from "formik";
import { validate } from "./formik/validateSchema";

const initialValues = {
   login: '', 
   password: '',
}

const Register = () => {
   return(
      <Formik
      initialValues = {initialValues}
      validationSchema = {validate}
      >
         {({touched, errors, isValid}) => ( 
            <Form name = 'form' id ='form'>
               <div>
                  <label htmlFor ='login'>login</label>
                  <Field type ='text' name ='login' className={touched.login && style.error}/>
                  {touched.login && <div className ={style.errors}>{errors.login}</div>}
               </div>
               <div>
                  <label htmlFor='password'>password</label>
                  <Field name='password' className={touched.password  && style.error}/>
                  {touched.password && <div className ={style.errors}>{errors.password}</div>}
               </div>
               <button type='submit' disabled={!isValid}>Submit</button>
            </Form>
         )}
      </Formik>
   )
}

export default Register;
