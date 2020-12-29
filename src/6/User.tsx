import React from 'react';
import { IUser } from './Root';

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
        <div>
            <div>
                {firstName} 
                {lastName} 
                {age} 
                <button onClick={remove} >Usuń</button>
                
                {!(firstName || lastName) && "Brak danych"}
            </div>
        </div>
    )
}