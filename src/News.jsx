import { Field, Form, Formik } from "formik";
import React, { PureComponent } from "react";
import { validate } from "./formik/validateSchema";
import styles from './News.module.css';

const initialValues = {
   status: '22'
};
class News extends PureComponent{

   state = {
      editMode: true,
      status: this.props.status,
   };

   componentDidUpdate(prevProps, prevState){
      if((prevProps.status || prevState.status) !== this.props.status){
         this.setState({
            status:  this.props.status
         })
      }
   };

   activeEditMode = () => {
      this.setState ({
         editMode: false,
      })
   };

   deactivateEditMode = () => {
      this.setState({
         editMode: true,
      })
      this.props.updateNewsThunkCreater(this.state.status);
   };

   onChangeStatus = (e) => {
      this.setState({
         status: e.target.value
      })
   };

   render(){
      return(
         <div>
            { this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activeEditMode}>
                     {this.props.status}
                  </span>
               </div>
            }
            { !this.state.editMode &&
               <div style={{alignSelf:'center'}}>
                  <Formik
                   initialValues = {initialValues}
                   validationSchema = {validate}
                   >
                     {
                        ({touched, errors}) => (
                           <Form name = 'status'>
                              <Field 
                              name = 'status' 
                              onBlur={this.deactivateEditMode} 
                              value = {this.state.status} 
                              onChange = {this.onChangeStatus}
                              autoFocus = {true}
                              />
                              {touched.status && <div className ={styles.errors}>{errors.status}</div>}
                           </Form>
                        )
                     }
                  </Formik>
               </div>        
            } 
         </div>
      )
   }
}

export default News;