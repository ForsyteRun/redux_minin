import React from "react";
import { NavLink } from "react-router-dom";
import { getFollow, getUnFollow } from "./api/api";
import style from './Status.module.css';

let Status = (props) => {
  let maxPageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages =[];
  
  for( let i = 1; i <= maxPageCount; i++){
    pages.push(i);
  }

  return (
    <div>    
      {props.dataUsers.map(el => 
      <div key={el.id} className = {style.content}>
        <span>
          <div>
            <NavLink to = {'/profile/' + el.id}>
              <img src={el.url} className = {style.img}/>
            </NavLink>
          </div>
          <div>
            {el.fallowed ?
              <button disabled = {props.isFollowingData} onClick={() => {  
                
                props.isFollowing(true);
              
                getFollow(el.id)
                .then(response => {     
                  props.unFollow(response.id)
                  props.isFollowing(false)})
                .catch(console.log('error delete'))
                      
              }}>Follow</button>
            : <button disabled = {props.isFollowingData} onClick={()=>{
              
                props.isFollowing(true);
                
                getUnFollow(el.id, el.url)
                .then(res => {
                  props.follow(res.id)
                  props.isFollowing(false)})
                .catch(console.log('error post'))
                
              }}>UnFollow</button>}
          </div>
        </span>
        <span>
          <span>{el.name}</span>
          <div>{el.status}</div>
          <div>{el.country}</div>
        </span>
      </div>) 
    }
    <div className={style.pagi}>
      {pages.map(el => 
      <span className={props.currentPage === el && style.selected}
      onClick ={() => props.onPageChange(el)}>{el}</span>)}
    </div>
    </div>
  )
}

export default Status;