import React, { useState } from 'react';
import User from './User';


export default function Root(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <User firstName={firstName} lastName={lastName} />

            <input type="text" onChange={(e) => { setFirstName(e.target.value)}} />
            <input type="text" onChange={(e) => { setLastName(e.target.value)}} />
        </div>
    )
}