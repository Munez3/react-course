import React, { useState, useReducer } from 'react';
import User from './User';

export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
}

enum IUserActions {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

function userReducer(state: IUser[], action: {type: IUserActions, payload: IUser}) {
    switch (action.type) {
        case IUserActions.ADD:
            const newList = state.slice();
            return newList.concat(action.payload);
        case IUserActions.REMOVE:
            return state;
        default:
            return state;
    }
}

export default function Root(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(-1);
    const [users, dispatch] = useReducer(userReducer, []);

    return (
        <div>
            <form action="">
                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value)}} />
                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value)}} />
                <input type="text" value={age} onChange={e => setAge(Number(e.target.value))} />

                <input type="submit" onClick={e => {
                    e.preventDefault();

                    dispatch({type: IUserActions.ADD, payload: {firstName, lastName, age}})

                    setFirstName('');
                    setLastName('');
                    setAge(-1);
                }}/>
            </form>

            {users.map((user, index) => {
                return <User key={index} user={user} />
            })}
        </div>
    )
}