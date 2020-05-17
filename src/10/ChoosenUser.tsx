import React, { useMemo } from 'react';
import { useUserContext } from './UserContext';
import { useParams } from 'react-router-dom';
import { Flexbox, UserBox, Container } from './Styled';

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
        <Flexbox>
            <Container>
                <UserBox sbet>
                    <span>Imię:</span><span>{firstName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Nazwisko:</span><span>{lastName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Wiek:</span><span>{age}</span> 
                </UserBox>
            </Container>
        </Flexbox>
    )
}