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
      if(prevProps.status != this.props.status){
         this.setState({
            status:  this.props.states
         })
      }
   }

   activeEditMode = () => {
      this.setState ({
         editMode: false,
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: true,
      })
      this.props.updateNewsThunkCreater(this.state.status);
      // this.onSubmit()
   }

   onChangeStatus = (e) => {
      this.setState({
         status: e.target.value
      })
   }

   onSubmit = (data) => {
      console.log(data);
   }

   render(){

      console.log('render');

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
                   onSubmit = {this.onSubmit}
                   >
                     {
                        ({touched, errors}) => (
                           <Form name = 'status'>
                              <Field 
                              name = 'status' 
                              onBlur={this.deactivateEditMode} 
                              value = {this.state.status} 
                              onChange = {this.onChangeStatus}/>
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