import React from 'react';
import { IUser } from './Root';

interface IProps {
    user: IUser
}

export default function User({ user }: IProps){

    const { firstName, lastName, age } = user;
    return (
        <div>
            <div>
                {firstName} {lastName} {age}
                {!(firstName || lastName) && "Brak danych"}
            </div>
        </div>
    )
}