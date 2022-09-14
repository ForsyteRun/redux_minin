import { Formik } from "formik";
import React from "react";
import style from './Auth.module.css';
import { validate } from "./formik/validateSchema";

const initialValue = {
  login: '',
  password: ''
}

const Auth = (props) => {
  return (
    <div >   
      <Formik
        initialValues = {initialValue}
        validationSchema = {validate}
        onSubmit = {(login, password) => {
          console.log(login, password)
        }}>
      {props => (
          <form onSubmit={props.handleSubmit} className={style.conteiner}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value='11'
              name="login"
            />
              <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value='11'
              name="password"
            />
            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
    
    
  )
}

export default Auth;
