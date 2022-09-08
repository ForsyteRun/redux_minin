import React, { Component } from "react";

class News extends Component{

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
   }

   onChangeStatus = (event) => {
      this.setState({
         status: event.target.value,
      })
   }

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
                  <input autoFocus={true} onBlur={this.deactivateEditMode} 
                  value={this.state.status} onChange={this.onChangeStatus}></input>
               </div>        
            } 
         </div>
      )
   }
}

export default News;