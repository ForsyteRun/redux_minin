import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC, currentPage, toggleLoading, totalPages } from "./redux/statusReduser";
import Status from './Status';
import axios from "axios";
import loadingGif from './img/loading.gif';

class StatusAPI extends Component{
  
  componentDidMount(){   
    this.props.toggleLoading(true)
    
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
        .then(response => {
              this.props.setUsers(response.data);
              this.props.totalPages((response.headers['x-total-count']))
            })

    this.props.toggleLoading(false)      
  }

  onPageChange = (el) => {
    
    this.props.set_CurrentPage(el);
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${el}`)
    .then(response =>{ this.props.setUsers(response.data)})    
  }


  render(){
    return (
      <>
      {this.props.isLoading ? <img src={loadingGif}/> : null}
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
  
  // let mapDispatchToProps = (dispatch) => {
  //   debugger
  //   return {
  //     follow: (userId) => {
  //       dispatch(followAC(userId));
  //     },
  //     unFollow: (userId) => {
  //       dispatch(unFollowAC(userId));
  //     },
  //     set_Users: (users) => {
  //       dispatch(setUsers(users));  
  //     },
  //     set_CurrentPage: (pageId) => {
  //       dispatch(currentPage(pageId))
  //     },
  //     setTotalPages: (pageNum) => {
  //       dispatch(totalPages(pageNum))
  //     },
  //     is_Loading: (toogle) => {
  //       dispatch(toggleLoading(toogle))
  //     }
  //   }
  // }

export default connect(mapStateToProps, {
  followAC, unFollowAC, setUsers, set_CurrentPage: currentPage, totalPages, toggleLoading
})(StatusAPI)