import React from 'react';
import User from './User';
import './common.scss';
import { useUserContext } from './UserContext';
import { Flexbox, Container } from './Styled';

export default function Users(){
    const { users } = useUserContext();
    
    return (
        <Flexbox>
            <Container>
                {users.map((user, index) => {
                    return <User key={index} user={user} />
                })}

                {users.length === 0 && <div className="text-center">Brak wyników</div>}
            </Container>
        </Flexbox>
    )
}