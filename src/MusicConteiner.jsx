import React, { Component } from "react";
import Music from "./Music";
import {connect} from 'react-redux';

class MusicConteiner extends Component{

   render(){
      return (
         <div>
            <Music {...this.props}/>
         </div>
         )
      }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export default connect(mapStateToProps)(MusicConteiner);

