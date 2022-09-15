import { Field, Formik , Form} from "formik";
import React from "react";
import style from './Auth.module.css';
import { validateAuth } from "./formik/validateSchema";

const initialValue = {
  login: '',
  password: '', 
  rememberMe: false,
}

const Auth = () => {
  return (
      <Formik
        initialValues = {initialValue}
        validationSchema = {validateAuth}
        onSubmit = {(value) => console.log(value)}>
      {(props) => (
          <Form className={style.wrapper}>
            <div className={style.conteiner}>
              <Field
                name="login"
                placeholder="введите логин"
              />
              <Field
                name="password"
                placeholder="введите пароль"
              />
            </div>
            <div className={style.rememderBox}>
              <Field type = 'checkbox' name = 'rememberMe' id = 'rememberMe'/>
              <span>remember me</span>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
  )
}

export default Auth;
