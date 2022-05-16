import React, { useEffect, useState } from "react";
import s from './Paginator.module.css'

const Paginator = (props) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    let onNextButtonClick = () => {
        if (portionNumber < portionCount)
        setPortionNumber(portionNumber + 1)
    }
    let onPrevButtonClick = () => {
        if (portionNumber > 1)
        setPortionNumber(portionNumber - 1)
    }
    return (
        <div className={s.paginartor}>
            <div className={s.item} onClick={() => {
                setPortionNumber(1)
                props.requestUsers(1, props.pageSize)
            }}>First</div>
            { <div className={s.item} disabled={portionNumber === 1} onClick={onPrevButtonClick}>{'<'}</div>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div key={p} className={s.item + ' ' + (props.currentPage === p ? s.selectedPage : '')}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</div>
                })}
            {<div className={s.item} disabled={portionNumber == portionCount} onClick={onNextButtonClick}>{'>'}</div> }
            <div className={s.item} onClick={() => {
                setPortionNumber(portionCount)
                props.requestUsers(portionCount, props.pageSize)
            }}>Last</div>
        </div>
    )
}


export default Paginator;