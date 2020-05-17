import React from 'react';
import './user.scss';
import './common.scss';
import { IUser } from './UserContext';
import { useUserContext } from './UserContext';
import { useHistory } from 'react-router-dom';

interface IProps {
    user: IUser;
}

export default function User({ user }: IProps){
    const { removeUser } = useUserContext();
    const history = useHistory();
    
    function remove(){  
        removeUser(user.id)
    }

    function redirect(){
        history.push(`/user/${user.id}`)
    }

    const { firstName, lastName } = user;
    
    return (
        <div className="user flexbox flexbox--sbet">
            <div onClick={redirect}>
                <span>{firstName}</span> 
                <span>{lastName}</span> 
            </div>
            <button className="btn" onClick={remove} >Usuń</button>
        </div>
    )
}