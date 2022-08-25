import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC, currentPage, toggleLoading, totalPages } from "./redux/statusReduser";
import Status from './Status';
import axios from "axios";
import loadingGif from './img/loading.gif';

class StatusAPI extends Component{
  
  componentDidMount(){   
    this.props.is_Loading(true)
    
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
        .then(response => {
              this.props.set_Users(response.data);
              this.props.setTotalPages((response.headers['x-total-count']))
            })

    this.props.is_Loading(false)      
  }

  onPageChange = (el) => {
    debugger
    this.props.set_CurrentPage(el);
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${el}`)
    .then(response =>{ this.props.set_Users(response.data)
       this.props.setTotalPages(response.headers['x-total-count'])})    
  }


  render(){
    return (
      <>
      {this.props.isLoading ? <img src={loadingGif}/> : null}
        <Status pageSize ={this.props.pageSize}
        totalUserCount = {this.props.totalUserCount}
        dataUsers = {this.props.dataUsers}
        currentPage = {this.props.currentPage}
        follow = {this.props.follow}
        unFollow = {this.props.unFollow}
        set_Users = {this.props.set_Users}
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
  
  let mapDispatchToProps = (dispatch) => {
    debugger
    return {
      follow: (userId) => {
        dispatch(followAC(userId));
      },
      unFollow: (userId) => {
        dispatch(unFollowAC(userId));
      },
      set_Users: (users) => {
        dispatch(setUsers(users));  
      },
      set_CurrentPage: (pageId) => {
        dispatch(currentPage(pageId))
      },
      setTotalPages: (pageNum) => {
        dispatch(totalPages(pageNum))
      },
      is_Loading: (toogle) => {
        dispatch(toggleLoading(toogle))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(StatusAPI)