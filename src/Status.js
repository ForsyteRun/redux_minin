import style from './Status.module.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unFollowAC, currentPage } from "./redux/statusReduser";


class Status extends Component{
  
  componentDidMount(){   
     this.props.set_Users( [
      {id: 1, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Ivan', status: 'admin', country: 'USA', fallowed: false},
      {id: 2, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Maria', status: 'admin', country: 'Bolgary',fallowed: false},
      {id: 3, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Stepan', status: 'user', country: 'China', fallowed: true},
      {id: 4, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Airan', status: 'user', country: 'Bali',fallowed: true},
   ])
  }

  render(){

    let maxPageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages =[];
    
    for( let i = 1; i <= maxPageCount; i++){
      pages.push(i);
    }


    return (
      <div>
          {this.props.dataUsers.map(el => 
            <div key={el.id} className = {style.content}>
              <span>
                <div>
                  <img src={el.imgUrl} className = {style.img}/>
                </div>
                <div>
                  {el.fallowed 
                  ? <button onClick={() => {this.props.unFollow(el.id)}}>Follow</button> 
                  : <button onClick={() => {this.props.follow(el.id)}}>UnFollow</button>}
                </div>
              </span>
              <span>
                <span>{el.fullName}</span>
                <div>{el.status}</div>
                <div>{el.country}</div>
              </span>
              
            </div>) 
          }
          <div className={style.pagi}>
            {pages.map(el => 
            <span className={this.props.currentPage === el && style.selected}
            onClick ={() => {this.props.set_CurrentPage(el)}}>{el}</span>)}
          </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Status)