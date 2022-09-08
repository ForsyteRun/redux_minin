import React from "react";
import { NavLink } from "react-router-dom";
import { getFollow, getUnFollow } from "./api/api";
import NewsConteiner from "./NewsConteiner";
import style from './Status.module.css';

let Status = (props) => {
  let maxPageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages =[];
  
  for( let i = 1; i <= maxPageCount; i++){
    pages.push(i);
  }

  return (
    <div>
        <NewsConteiner data = {props.data}/>
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
                <button disabled = {props.isFollowingData.some(id => id === el.id)} onClick={() => {  
                  
                  props.isFollowing(true, el.id);
                
                  getFollow(el.id)
                  .then(response => {    
                    
                    props.unFollow(response.id)
                    props.isFollowing(false, response.id)})
                  .catch(new Error('getFollow errror'))
                        
                }}>Follow</button>
              : <button disabled = {props.isFollowingData.some(id => id === el.id)} onClick={()=>{
                
                  props.isFollowing(true, el.id);
                  
                  getUnFollow(el.id, el.url)
                  .then(res => {
                    
                    props.follow(res.id)
                    props.isFollowing(false, res.id)})
                  .catch(new Error('follow error'))
                  
                }}>UnFollow</button>}
            </div>
          </span>
          <span>
            <span>{el.name}</span>
            <div>{el.status}</div>
            <div>{el.country}</div>
          </span>
        </div>
        ) 
      } 
      <div className={style.pagi}>
        {pages.map(el => 
        <span className={props.currentPageData === el && style.selected}
        onClick ={() => props.onPageChange(el)}>{el}</span>)}
      </div>
    </div>
  )
}

export default Status;