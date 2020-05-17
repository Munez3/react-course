import React from 'react';
import './common.scss';
import { UserProvider } from './UserContext';
import Users from './Users';



export default function Root(){
    return (
        <UserProvider>
            <Users />
        </UserProvider>
    )
}