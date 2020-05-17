import React, { useMemo } from 'react';
import { useUserContext } from './UserContext';
import { useParams } from 'react-router-dom';

export default function ChoosenUser(){
    const { getUser } = useUserContext();
    const { id } = useParams();

    const user = useMemo(() => {
        return getUser(id);
    }, [id])

    if(!user){
        return <div>Brak </div>
    }

    const { firstName, lastName, age } = user;
    return (
        <div className="flexbox">
            <div className="container">
                <div className="user flexbox flexbox--sbet">
                    <span>Imię:</span><span>{firstName}</span> 
                </div>
                <div className="user flexbox flexbox--sbet">
                    <span>Nazwisko:</span><span>{lastName}</span> 
                </div>
                <div className="user flexbox flexbox--sbet">
                    <span>Wiek:</span><span>{age}</span> 
                </div>
            </div>
        </div>
    )
}