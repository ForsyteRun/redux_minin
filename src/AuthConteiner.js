import React, { Component } from "react";
import Auth from "./Auth";
import {connect} from 'react-redux';
class AuthConteiner extends Component {
  render(){
    return(
      <div>
        <Auth {...this.props}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.auth,
  }
}


export default connect(mapStateToProps)(AuthConteiner);