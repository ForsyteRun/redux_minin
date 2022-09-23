import React, { Component } from "react";
import { connect } from "react-redux";
import {   
   isFollowing, 
   getUsersThunkCreater,
   getPageChangeThunkCreater,
   getUnFollowThunkCreater,
   getFollowThunkCreater
  } from "./redux/statusReduser";
import Status from './Status';
import Preloader from "./Preloader";
import { downReselect } from "./redux/selectors";

class StatusAPI extends Component{

  componentDidMount(){   
    this.props.getUsersThunkCreater(this.props.pageSize, this.props.currentPage)
  };

  onPageChange = (el) => {
    this.props.getPageChangeThunkCreater(this.props.pageSize, el)
  }
  
  render(){
    return (
      <div>
        {this.props.isLoading ? <Preloader/> : null}
          <Status {...this.props} onPageChange = {this.onPageChange}/>
      </div>
    )
  };
}

 let mapStateToProps = (state) => {
    return {
      dataUsers:downReselect(state),
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPageData: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      isFollowingData: state.usersPage.isFollowingProgress,
    }
  }

export default connect(mapStateToProps, {
  isFollowing, getFollowThunkCreater, getUnFollowThunkCreater,
   getUsersThunkCreater, getPageChangeThunkCreater
})(StatusAPI)