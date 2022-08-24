import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC, currentPage } from "./redux/statusReduser";
import Status from './Status';


class StatusAPI extends Component{
  
  componentDidMount(){   
     this.props.set_Users( [
      {id: 1, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Ivan', status: 'admin', country: 'USA', fallowed: false},
      {id: 2, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Maria', status: 'admin', country: 'Bolgary',fallowed: false},
      {id: 3, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Stepan', status: 'user', country: 'China', fallowed: true},
      {id: 4, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Airan', status: 'user', country: 'Bali',fallowed: true},
   ])
  }

  render(){
    return (
      <Status pageSize ={this.props.pageSize}
      totalUserCount = {this.props.totalUserCount}
      dataUsers = {this.props.dataUsers}
      currentPage = {this.props.currentPage}
      follow = {this.props.follow}
      unFollow = {this.props.unFollow}
      set_Users = {this.props.set_Users}
      set_CurrentPage = {this.props.set_CurrentPage}
      />
    )
  };
}

 let mapStateToProps = (state) => {
    return {
      dataUsers:state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
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
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(StatusAPI)