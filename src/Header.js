import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import style from './Header.module.css';

const Header = React.memo (props => {

  const redirAuth = () => {
    props.outAuthThunkCreater();
  }

  return (
    <div className={style.conteiner}>
      <span className={style.login}>
        {props.isAuth ? <NavLink to={'/auth'}> <span onClick={redirAuth}>LogOut</span> </NavLink> : <NavLink to={'/auth'}> <span>Login</span></NavLink>}
      </span>
    </div>
  )
})

export default Header;
