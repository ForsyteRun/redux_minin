import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css';

const Header = (props) => {
  return (
    <div className={style.conteiner}>
      <span className={style.login}>
        {props.isAuth ? <NavLink to={'/auth'}> <span>LogOut</span> </NavLink> : <NavLink to={'/auth'}> <span>Login</span></NavLink>}
      </span>
    </div>
  )
}

export default Header;
