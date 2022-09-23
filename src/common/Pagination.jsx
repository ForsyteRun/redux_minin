import React from "react";
import style from './Pagination.module.css';

let Pagination = (props) => {
  let maxPageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= maxPageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagi}>
      {pages.map(el =>
        <span className={props.currentPageData === el && style.selected}
          onClick={() => props.onPageChange(el)}>{el}</span>)}
    </div>
  )
}

export default Pagination;