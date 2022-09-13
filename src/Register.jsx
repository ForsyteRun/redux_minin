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

const Register = (props) => {

   return(
      <Formik
      initialValues = {initialValues}
      validationSchema = {validate}
      onSubmit = {onSubmit}>
         {(props) => (
            <Form name = 'form' id ='form'>
               <div>
                  <label htmlFor ='login'>login</label>
                  <Field type ='text' name ='login' className={props.isValid || style.errors}/>
                  {props.touched.login && <div className ={style.error}>{props.errors.login}</div>}
               </div>
               <div>
                  <label htmlFor='rename'>password</label>
                  <Field name='password' className={props.isValid || style.errors}/>
                  {props.touched.password && <div className ={style.error}>{props.errors.password}</div>}
               </div>
               <button type='submit' disabled={!props.isValid}>Submit</button>
            </Form>
         )}
      </Formik>
   )
}

export default Register;



// import React from 'react';
// import { Field, Form, Formik, FormikProps } from 'formik';

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

// const Register = () => (
//   <div>
//     <h1>My Form</h1>
//     <Formik
//       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//     >
//       {(props: FormikProps<any>) => (
//         <Form>
//           <Field type="email" name="email" placeholder="Email" />
//           <Field as="select" name="color">
//             <option value="red">Red</option>
//             <option value="green">Green</option>
//             <option value="blue">Blue</option>
//           </Field>

//           <Field name="lastName">
//             {({
//               field, // { name, value, onChange, onBlur }
//               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//               meta,
//             }) => (
//               <div>
//                 <input type="text" placeholder="Email" {...field} />
//                 {meta.touched && meta.error && (
//                   <div className="error">{meta.error}</div>
//                 )}
//               </div>
//             )}
//           </Field>
//           <Field name="lastName" placeholder="Doe" component={MyInput} />
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

//  export default Register;