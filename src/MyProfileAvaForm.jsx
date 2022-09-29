import React from "react";
import { Formik, Field, Form } from 'formik';

const MyProfileAvaForm = (props) => {

   const onChangeAva = ({ imageUrl }, value) => {
     props.userAvatar(imageUrl);
      value.resetForm();
   };

   return (
      <div>
         {props.editLogoForm &&
               <Formik
                  initialValues={{ imageUrl: '' }}
                  onSubmit={onChangeAva}
               >
                  {
                     () => (
                        <Form>
                           <Field type="text" name="imageUrl" placeholder="Enter Url" style={{width: '100px'}}>
                           </Field>
                           <button type="submit">Submit</button>
                        </Form>
                     )
                  }
               </Formik>}
      </div>
   )
}

export default MyProfileAvaForm;