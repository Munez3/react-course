import React, { useState } from 'react';
import User from './User';
import './common.scss';
import { useUserContext } from './UserContext';
import { Flexbox, Container } from './Styled';
import api from './ky';

export default function Users(){
    const { users } = useUserContext();
    const [visibleUser, setVisibleUser] = useState(-1);
    
    return (
        <Flexbox>
            <Container>
                {users.map((user, index) => {
                    return <User key={index} user={user} setVisibleUser={setVisibleUser} isVisible={visibleUser === user.id} />
                })}

                {users.length === 0 && <div className="text-center">Brak wyników</div>}
            </Container>
        </Flexbox>
    )
}