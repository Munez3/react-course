import React, { useEffect, useState } from 'react';
import { useUserContext, IUser } from './UserContext';
import { useParams } from 'react-router-dom';
import { Flexbox, UserBox, Container } from './Styled';

export default function ChoosenUser(){
    const { getUser } = useUserContext();
    const { id } = useParams();
    const [ user, setUser ] = useState<IUser>();
    
    useEffect(() => {
        getUser(id).then((response: any) => {
            setUser(response);
        })
    }, [id])

    if(!user){
        return <Flexbox>Ładowanie... </Flexbox>
    }

    return (
        <Flexbox>
            <Container>
                <UserBox sbet>
                    <span>Imię:</span><span>{user?.firstName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Nazwisko:</span><span>{user?.lastName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Wiek:</span><span>{user?.age}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Adres e-mail:</span><span>{user?.email}</span> 
                </UserBox>
            </Container>
        </Flexbox>
    )
}