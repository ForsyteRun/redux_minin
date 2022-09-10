import React from "react";
import style from './Register.module.css'
import { Formik, Form, Field, ErrorMessage} from "formik";
import { validate } from "./formik/validateSchema";

const initialValues = {
   name: '', 
   email: '',  
   channel: '',
}

const onSubmit = (element) => {
   console.log(element);
}

const Register = (props) => {

   return (
      <Formik
      initialValues = {initialValues}
      validationSchema = {validate}
      onSubmit = {onSubmit}>
         <Form>
            <div className={style.form_conteiner}>
               <label for = 'name'>Name</label>
               <Field type='text' id='name' name='name'/>
               <ErrorMessage name='name'/>
            </div>
            <div className={style.form_conteiner}>
               <label for = 'email'>E-mail</label>
               <Field type='email' id='E-mail' name='email'/>   
               <ErrorMessage name='email'/>
            </div>
            <div className={style.form_conteiner}>
               <label for = 'channel'>Channel</label>
               <Field type='text' id='channel' name='channel'/>
               <ErrorMessage name = 'channel'/>
            </div>
            <input type='submit'/>
         </Form>
      </Formik>
   )
}

export default Register;