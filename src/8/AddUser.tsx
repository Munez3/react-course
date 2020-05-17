import React, { useState, useReducer } from 'react';
import { useUserContext } from './UserContext';

export default function AddUser(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(-1);

    const { addUser } = useUserContext();

    return (
        <div className="flexbox">
            <div>
                <form action="" className="form">
                    <input type="text" className="form__input" value={firstName} onChange={(e) => { setFirstName(e.target.value)}} />
                    <input type="text" className="form__input" value={lastName} onChange={(e) => { setLastName(e.target.value)}} />
                    <input type="text" className="form__input" value={age} onChange={e => setAge(Number(e.target.value))} />

                    <input type="submit" className="btn" onClick={e => {
                        e.preventDefault();

                        addUser({firstName, lastName, age})

                        setFirstName('');
                        setLastName('');
                        setAge(-1);
                    }}/>
                </form>
            </div>
        </div>
    )
}