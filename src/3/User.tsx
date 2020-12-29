import React from 'react';

interface IProps {
    firstName: string;
    lastName?: string;
    age?: number;
}

export default function User({firstName, lastName, age}: IProps){

    return (
        <div>
            <div>
                Imię: {firstName}
            </div>  
            <div>
                Nazwisko: {lastName}
            </div>
            <div>
                Wiek: {age}
            </div>
        </div>
    )
}