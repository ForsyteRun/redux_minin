import React, { Component } from "react";
import {connect} from 'react-redux';
import NewsHooks from "./NewsHooks";
import {getNewsThunkCreater,
        setNewsThunkCreater,
        updateNewsThunkCreater} from './redux/statusReduser';

class NewsConteiner extends Component{

   componentDidMount(){
     this.props.getNewsThunkCreater();
   }

   render(){
      return (
         <div>
            {/* <News {...this.props} onChangeStatus = {this.onChangeStatus}/> */}
            <NewsHooks {...this.props} onChangeStatus = {this.onChangeStatus}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      status: state.usersPage.status,
   }
}

export default connect(mapStateToProps, {getNewsThunkCreater,
    setNewsThunkCreater, updateNewsThunkCreater})(NewsConteiner)