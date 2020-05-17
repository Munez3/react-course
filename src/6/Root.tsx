import React, { useState, useReducer } from 'react';
import User from './User';

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
}

enum IUserActions {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

function userReducer(state: IUser[], action: {type: IUserActions, payload: any}) {
    switch (action.type) {
        case IUserActions.ADD:
            const lastId = state[state.length - 1]?.id || 1;
            const newList = state.slice();
            return newList.concat({...action.payload, id: lastId+1});
        case IUserActions.REMOVE:
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
}

export default function Root(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(-1);
    const [users, dispatch] = useReducer(userReducer, []);

    function removeUser(id: number){
        dispatch({type: IUserActions.REMOVE, payload: id});
    }

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
                return <User key={index} user={user} removeUser={removeUser} />
            })}
        </div>
    )
}