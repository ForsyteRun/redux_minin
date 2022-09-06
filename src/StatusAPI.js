import React, { Component } from "react";
import { connect } from "react-redux";
import {
   followAC, 
   unFollowAC,   
   isFollowing, 
   getUsersThunkCreater,
   getPageChangeThunkCreater
  } from "./redux/statusReduser";
import Status from './Status';
import Preloader from "./Preloader";

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
        <Status pageSize ={this.props.pageSize}
        totalUserCount = {this.props.totalUserCount}
        dataUsers = {this.props.dataUsers}
        currentPageData = {this.props.currentPageData}
        follow = {this.props.followAC}
        unFollow = {this.props.unFollowAC}
        set_Users = {this.props.setUsers}
        onPageChange = {this.onPageChange}
        isFollowing = {this.props.isFollowing}
        isFollowingData = {this.props.isFollowingData}
        data = {'Enter any'}
        />
      </div>
    )
  };
}

 let mapStateToProps = (state) => {
    return {
      dataUsers:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPageData: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
      isFollowingData: state.usersPage.isFollowingProgress,
    }
  }

export default connect(mapStateToProps, {
  followAC, unFollowAC, isFollowing,
   getUsersThunkCreater, getPageChangeThunkCreater
})(StatusAPI)