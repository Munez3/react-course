import React from 'react';
import './user.scss';
import './common.scss';
import { IUser } from './UserContext';
import { useUserContext } from './UserContext';

interface IProps {
    user: IUser;
}

export default function User({ user }: IProps){
    const { removeUser } = useUserContext();

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