import React from "react";
import style from './Register.module.css'
import { Formik, Form, Field } from "formik";
import { validate } from "./formik/validateSchema";

const initialValues = {
   login: '', 
   password: '',
}
let onSubmit = (el) => {
   console.log(el);
}

const Register = () => {

   return(
      <Formik
      initialValues = {initialValues}
      validationSchema = {validate}
      onSubmit = {onSubmit}>
         {(props) => ( 
            <Form name = 'form' id ='form'>
               <div>
                  <label htmlFor ='login'>login</label>
                  <Field type ='text' name ='login' className={props.touched.login && style.error}/>
                  {props.touched.login && <div className ={style.errors}>{props.errors.login}</div>}
               </div>
               <div>
                  <label htmlFor='password'>password</label>
                  <Field name='password' className={props.touched.password  && style.error}/>
                  {props.touched.password && <div className ={style.errors}>{props.errors.password}</div>}
               </div>
               <button type='submit' disabled={!props.isValid}>Submit</button>
            </Form>
         )}
      </Formik>
   )
}

export default Register;
