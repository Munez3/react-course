import React, { useState } from 'react';
import User from './User';


export default function Root(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(undefined);

    return (
        <div>
            <User firstName={firstName} lastName={lastName} age={age} />

            <input type="text" onChange={(e) => { setFirstName(e.target.value)}} />
            <input type="text" onChange={(e) => { setLastName(e.target.value)}} />
            <input type="text" onChange={(e) => { setAge(e.target.value)}} />
        </div>
    )
}