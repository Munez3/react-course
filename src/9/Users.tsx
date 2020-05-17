import React from 'react';
import User from './User';
import './common.scss';
import { useUserContext } from './UserContext';

export default function Users(){
    const { users } = useUserContext();
    
    return (
        <div className="flexbox">
            <div className="container">
                {users.map((user, index) => {
                    return <User key={index} user={user} />
                })}

                {users.length === 0 && <div className="text-center">Brak wyników</div>}
            </div>
        </div>
    )
}