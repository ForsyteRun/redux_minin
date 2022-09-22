import { Field, Formik , Form} from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import style from './Auth.module.css';
import { validateAuth } from "./formik/validateSchema";
import { enterAuthThunkCreater } from "./redux/authReduser";

const initialValue = {
          login: '',
          password: '', 
          rememberMe: false,
        }

const Auth = (props) => {
    if(props.data.isAuth) return <Navigate to = '/status'/>
    
    const onSubmit = (values, actions) => {
      debugger;
            props.enterAuthThunkCreater(values, actions)
          }

    return (
      <div>
        <Formik
          initialValues = {initialValue}
          validationSchema = {validateAuth}
          onSubmit ={onSubmit}
        >
        {({isSubmitting, errors, touched}) => (
            <Form className={style.wrapper}>
              <div className={style.conteiner}>
                <Field 
                  name="login"
                  placeholder="введите логин"
                  className = {touched.login && errors.login && style.errorBorder}
                />
                <Field
                  name="password"
                  placeholder="введите пароль"
                  className = {touched.password && errors.password && style.errorBorder}
                />
              </div>
              <div className={style.rememderBox}>
                <Field type = 'checkbox' name = 'rememberMe' id = 'rememberMe'/>
                <span>remember me</span>
              </div>
              <button disabled = {isSubmitting} type="submit">Submit</button>
            </Form>
          )}
        </Formik>
    
      </div>
  )
}

export default connect(null, {enterAuthThunkCreater})(Auth);
