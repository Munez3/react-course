import React from 'react';
import { IUser } from './Root';
import './user.scss';
import './common.scss';

interface IProps {
    user: IUser;
    removeUser: Function;
}

export default function User({ user, removeUser }: IProps){

    function remove(){
        removeUser(user.id)
    }

    const { firstName, lastName, age } = user;
    return (
        <div className="user flexbox flexbox--sbet">
            <div>
                <span>{firstName}</span> 
                <span>{lastName}</span> 
                {age} 
            </div>
            <button className="btn" onClick={remove} >Usuń</button>
        </div>
    )
}