import React from "react";
import NewsConteiner from "./NewsConteiner";
import Pagination from "./common/Pagination";
import User from "./User";

let Status = (props) => {

  return (
    <div>
      <NewsConteiner data={props.data} />
      {props.dataUsers.map(el => <User {...props} el = {el}/>)}
      <Pagination {...props} />
    </div>
)}

export default Status;