import { Home, Search, SearchSharp, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

export default function Header() {
    const dispatch = useDispatch();
    const logOfApp = ()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="Header">
            <div className="Header_Left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="LinkedIn"/>
                <div className="Header_Search">
                    <SearchIcon />
                    <input type="text"/>
               </div>
            </div>
            <div className="Header_Right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions 
                    avatar={true}
                    title="me" 
                    onClick={logOfApp}
                />
            </div>
        </div>
    )
}
