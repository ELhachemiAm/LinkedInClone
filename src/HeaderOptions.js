import React from 'react';
import './HeaderOptions.css';
import {Avatar} from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

export default function HeaderOptions({ avatar, Icon, title,onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
              {Icon && <Icon className="headerOption_Icon"/>}
              {avatar && 
                <Avatar className="headerOption_Icon">
                    {user?.email[0]}
                </Avatar>}
              <h3 className="headerOption_Title">{title}</h3>
        </div>
    );
}
