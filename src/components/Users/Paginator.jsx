import React, { useState } from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) { pages.push(i); }

    let [PortionNumber, setPortionNumber] = useState(1)
    let PortionSize = 20;
    let PortionCount = Math.ceil(pageCount / PortionSize);

    let leftBorderPortion = (PortionNumber - 1) * PortionSize + 1;
    let RightBorderportion = PortionNumber * PortionSize;

    return <div className={s.Paginator}>
        {PortionNumber > 1 && <button onClick={() => { setPortionNumber(PortionNumber - 1) }}>PREV</button>}
        <div>
            {pages.filter(p =>   p<=RightBorderportion && p>=leftBorderPortion)
                .map((p) => {
                    return <span className={props.currentPage === p && s.activePage}
                        onClick={(event) => { props.onPageChanged(p); }}>{p} </span>
                })}

        </div>

        {PortionCount > PortionNumber && <button onClick={() => { setPortionNumber(PortionNumber + 1) }}>NEXT</button>}
    </div>
}

export default Paginator;