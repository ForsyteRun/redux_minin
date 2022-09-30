import { Field, Formik, Form } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import style from './Auth.module.css';
import { validateAuth } from "./formik/validateSchema";
import { enterAuthThunkCreater } from "./redux/authReduser";

// const initialValue = {
//   login: '',
//   password: '',
//   rememberMe: false,
// }

const Auth = (props) => {

  if (props.data.isAuth) return <Navigate to='/myProfile' />

  const onSubmit = (values, actions) => {
      props.enterAuthThunkCreater(values, actions)
  }

  const initialValue = {
    login: '',
    password: '',
    rememberMe: false,
    captcha: props.data.captcha,
    captchaResponse: ''
  }

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValue}
        validationSchema={validateAuth}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form className={style.wrapper}>
            {console.log(props.values)}
            <div className={style.conteiner}>
              <Field
                name="login"
                placeholder="введите логин"
                className={props.touched.login && props.errors.login && style.errorBorder}
              />
              <Field
                name="password"
                placeholder="введите пароль"
                className={props.touched.password && props.errors.password && style.errorBorder}
              />
            </div>
            <div className={style.rememderBox}>
              <Field type='checkbox' name='rememberMe' id='rememberMe' />
              <span>remember me</span>
            </div>
              {props.values.captcha 
              && <div>
                  <img src={props.values.captcha} style={{ width: '200px' }} />
                  <Field name='captchaResponse'/> 
                 </div>}                    
            <button disabled={props.isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default connect(null, { enterAuthThunkCreater })(Auth);
