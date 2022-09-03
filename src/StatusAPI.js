import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC, currentPage, toggleLoading, totalPages } from "./redux/statusReduser";
import Status from './Status';
import Preloader from "./Preloader";
import { getUsersApi } from "./api/api";

class StatusAPI extends Component{
  componentDidMount(){   
    this.props.toggleLoading(true);    
    getUsersApi(this.props.pageSize, this.props.currentPage).then(response => {
              this.props.setUsers(response.data);
              this.props.totalPages((response.headers['x-total-count']))
              this.props.toggleLoading(false);      
            })
  };

  onPageChange = (el) => {
    this.props.set_CurrentPage(el);
    this.props.toggleLoading(true)
    getUsersApi(this.props.pageSize, el).then(response =>{ 
      this.props.setUsers(response.data)
      this.props.toggleLoading(false)})    
  }

  render(){
    return (
      <>
      {this.props.isLoading ? <Preloader/> : null}
        <Status pageSize ={this.props.pageSize}
        totalUserCount = {this.props.totalUserCount}
        dataUsers = {this.props.dataUsers}
        currentPage = {this.props.currentPage}
        follow = {this.props.followAC}
        unFollow = {this.props.unFollowAC}
        set_Users = {this.props.setUsers}
        onPageChange = {this.onPageChange}
        />
      </>
    )
  };
}

 let mapStateToProps = (state) => {
    return {
      dataUsers:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading,
    }
  }

export default connect(mapStateToProps, {
  followAC, unFollowAC, setUsers, set_CurrentPage: currentPage, totalPages, toggleLoading
})(StatusAPI)