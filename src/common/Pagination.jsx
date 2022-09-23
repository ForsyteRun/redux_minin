import React, { useState } from "react";
import style from './Pagination.module.css';

let Pagination = ({ amountPagi = 10, ...props }) => {

  let maxPageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= maxPageCount; i++) {
    pages.push(i);
  }

  let portionSize = Math.ceil(props.totalUserCount / amountPagi);
  const [portion, setPortion] = useState(1);
  let leftBackPagi = (portion - 1) * amountPagi + 1;
  let rightBackPagi = portion * amountPagi;

  return (
    <div className={style.pagi}>
      {(leftBackPagi > 1) &&
        <button onClick={() => {setPortion(portion - 1)}}
        style={{margin: '0 10px', fontStyle: 'italic', backgroundColor:'transparent', border: '1px solid #999', borderRadius: '15%'}}
        >PREV</button>}
      
      {pages
      .filter((el) => el >= leftBackPagi && el <= rightBackPagi)
      .map(el =>
          <span className={props.currentPageData === el && style.selected}
            onClick={() => props.onPageChange(el)}>{el}</span>
        )}

      {leftBackPagi < portionSize && 
        <button onClick={() => {setPortion(portion + 1)}} 
        style={{margin: '0 10px', fontStyle: 'italic', backgroundColor:'transparent', border: '1px solid #999', borderRadius: '15%'}}
        >NEXT</button>}
    </div>
  )
}

export default Pagination;