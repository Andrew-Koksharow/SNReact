import React from 'react';
import user_avatar from '../../assets/user_avatar.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';


let Users = (props) => {


    return <div>

Users   
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        {<div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user_avatar} className={s.avatar} />
                            </NavLink   >
                        </div>}
                        <div>
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollow(u.id)

                                }}>unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        props.follow(u.id)
                                    }}>follow</button>}

                        </div>
                    </span>

                    {/* <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>  */}


                </div>

            )

        }

        <Paginator totalCount={props.totalCount} pageSize={props.pageSize}
            onPageChanged={props.onPageChanged} currentPage={props.currentPage} />

    </div>
}

export default Users;