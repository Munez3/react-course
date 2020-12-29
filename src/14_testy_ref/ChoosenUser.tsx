import React, { useEffect } from 'react';
import { useUserContext } from './UserContext';
import { useParams } from 'react-router-dom';
import { Flexbox, UserBox, Container } from './Styled';

interface IProps {
    userId?: number;
}

export default function ChoosenUser(props: IProps){
    const { getUser, choosenUser, clearChoosenUser } = useUserContext();
    const { id } = useParams();
    
    useEffect(() => {
        getUser(props.userId || id);

        return () => {
            clearChoosenUser();
        }
    }, [id])

    if(!choosenUser){
        return <Flexbox>Ładowanie... </Flexbox>
    }

    return (
        <Flexbox>
            <Container>
                <UserBox sbet>
                    <span>Imię:</span><span>{choosenUser?.firstName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Nazwisko:</span><span>{choosenUser?.lastName}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Wiek:</span><span>{choosenUser?.age}</span> 
                </UserBox>
                <UserBox sbet>
                    <span>Adres e-mail:</span><span>{choosenUser?.email}</span> 
                </UserBox>
            </Container>
        </Flexbox>
    )
}