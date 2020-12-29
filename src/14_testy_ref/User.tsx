import React, { useState } from 'react';
import './user.scss';
import './common.scss';
import { IUser } from './UserContext';
import { useUserContext } from './UserContext';
import { useHistory } from 'react-router-dom';
import { UserBox, Button, ArrowIcon } from './Styled';
import arrow from '../arrow.png';
import ChoosenUser from './ChoosenUser';

interface IProps {
    user: IUser;
    setVisibleUser: Function;
    isVisible: boolean;
}

export default function User({ user, setVisibleUser, isVisible }: IProps){
    const { removeUser } = useUserContext();
    const history = useHistory();
    
    function remove(){  
        removeUser(user.id)
    }

    function redirect(){
        history.push(`/user/${user.id}`)
    }

    function toggleUser(){
        setVisibleUser(user.id);
    }

    const { firstName, lastName, id } = user;
    
    return (
        <UserBox sbet={true} wrap>
            <div onClick={redirect} data-testid={`user-${id}`}>
                <span>{firstName}</span>
                <span>{lastName}</span> 
            </div>
            <div>
                <ArrowIcon src={arrow} onClick={toggleUser} />
                <Button onClick={remove} >Usuń</Button>
            </div>

            {isVisible && (
                <UserBox>
                    <ChoosenUser userId={user.id} />
                </UserBox>
            )}
        </UserBox>
    )
}