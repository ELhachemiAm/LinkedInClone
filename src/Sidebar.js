import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <div className="sidebar_hash">#</div>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img 
                    src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"  
                    alt=""  />
                <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2964</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on posts</p>
                    <p className="sidebar_statNumber">1786</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("Bootstrap4")}
                {recentItem("Html5/Css3")}
                {recentItem("Design")}
            </div>
            
        </div>
    )
}

export default Sidebar