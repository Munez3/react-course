import React, { useState, useReducer } from 'react';
import User from './User';
import './common.scss';

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
        <div className="container flexbox">
            <div>
                <form action="" className="form">
                    <input type="text" className="form__input" value={firstName} onChange={(e) => { setFirstName(e.target.value)}} />
                    <input type="text" className="form__input" value={lastName} onChange={(e) => { setLastName(e.target.value)}} />
                    <input type="text" className="form__input" value={age} onChange={e => setAge(Number(e.target.value))} />

                    <input type="submit" className="btn" onClick={e => {
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
        </div>
    )
}