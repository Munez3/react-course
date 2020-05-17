import React, { useState } from 'react';
import { useUserContext } from './UserContext';
import { useHistory } from 'react-router-dom';

export default function AddUser(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(-1);
    const history = useHistory();

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
                        history.push('/')
                    }}/>
                </form>
            </div>
        </div>
    )
}