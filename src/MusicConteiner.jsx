import React, { Component } from "react";
import Music from "./Music";
import {connect} from 'react-redux';
import { withNavigate } from "./hoc/withNavigate";
import { compose } from "redux";

class MusicConteiner extends Component{

   render(){
      return (
         <div>
            <Music {...this.props}/>
         </div>
      )
   }
}

export default  compose(
   connect(),
   withNavigate
   )(MusicConteiner)


