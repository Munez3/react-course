import React, { useState } from 'react';
import { useUserContext } from './UserContext';
import { useHistory } from 'react-router-dom';
import { StyledForm, StyledInput, StyledSubmit } from './Styled';

export default function AddUser(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(-1);
    const history = useHistory();

    const { addUser } = useUserContext();

    return (
        <div className="flexbox">
            <div>
                <StyledForm>
                    <StyledInput type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value)}} />
                    <StyledInput type="text" value={lastName} onChange={(e) => { setLastName(e.target.value)}} />
                    <StyledInput type="text" value={age} onChange={e => setAge(Number(e.target.value))} />

                    <StyledSubmit type="submit" onClick={e => {
                        e.preventDefault();

                        addUser({firstName, lastName, age})
                        history.push('/')
                    }} />
                </StyledForm>
            </div>
        </div>
    )
}