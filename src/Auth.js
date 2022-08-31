import React from "react";
import style from './Auth.css';

const Auth = (props) => {
  return (
    <div className={style.conteiner}>   
      <input type='text' placeholder="enter login"></input>   
      <input type='number' placeholder="enter password"></input>
    </div>
  )
}

export default Auth;
