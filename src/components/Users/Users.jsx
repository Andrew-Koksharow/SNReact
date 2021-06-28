import React from 'react';
import user_avatar from '../../assets/user_avatar.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; ++i) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.activePage}
                    onClick={(event) => { props.onPageChanged(p); }}>{p} </span>
            })}

        </div>

        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        {
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user_avatar} className={s.avatar} />
                                </NavLink   >
                            </div>}
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {/* <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>  */}

                </div>
            )

        }
    </div>
}

export default Users;