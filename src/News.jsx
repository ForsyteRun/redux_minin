import React, { Component } from "react";

class News extends Component{

   state = {
      editMode: true,
   };

   activeEditMode = () => {
      this.setState ({
         editMode: false,
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: true,
      })
   }

   render(){
      return(
         <div>
            { this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activeEditMode}>
                     {this.props.data}
                  </span>
               </div>
            }
            { !this.state.editMode &&
               <div style={{alignSelf:'center'}}>
                  <input autoFocus={true} onBlur={this.deactivateEditMode} placeholder={this.props.data}></input>
               </div>        
            } 
         </div>
      )
   }
}

export default News;