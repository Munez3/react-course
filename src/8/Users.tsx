import React, { useState } from 'react';
import User from './User';
import './common.scss';
import { useUserContext } from './UserContext';
import AddUser from './AddUser';



export default function Users(){
    const { users } = useUserContext();
    
    return (
        <div className="container flexbox">
            <div>
                <AddUser />
            
                {users.map((user, index) => {
                    return <User key={index} user={user} />
                })}
            </div>
        </div>
    )
}