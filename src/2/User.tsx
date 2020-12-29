import React from 'react';

interface IProps {
    firstName: string;
    lastName?: string;
    age: number;
    children?: any;
}
//destrukturyzacja props, równoznaczne z User(props: IProps){}
export default function User({firstName, lastName, age, children}: IProps){

    return (
    <div>
        {firstName} {lastName} {age}
        {children}
    </div>
    )
}