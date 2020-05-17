import React from 'react';

interface IProps {
    firstName: string;
    lastName?: string;
}

export default function User({firstName, lastName}: IProps){

    return (
        <div>{firstName} {lastName}</div>
    )
}