import React from "react";
import { NavLink } from "react-router-dom";
import style from './Status.module.css';

let User = ({el, isFollowingData, isFollowing, getFollowThunkCreater}) => {

  return ( 
        <div className = {style.content}>
            <div>
              <NavLink to = {'/profile/' + el.id}>
                <img src={el.url} alt = 'coob' className = {style.img}/>
              </NavLink>
            </div>
            <div>
              {el.fallowed ?
                <button disabled = {isFollowingData.some(id => id === el.id)} onClick={() => {  
                  
                  isFollowing(true, el.id);
                  getFollowThunkCreater(el.id) 

                }}>Follow</button>
              : <button disabled = {isFollowingData.some(id => id === el.id)} onClick={()=>{
                
                  isFollowing(true, el.id);
                  getFollowThunkCreater(el.id)
                  
                }}>UnFollow</button>}
            </div>
        </div>
        ) 
      }

export default User;