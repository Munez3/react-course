import React from 'react';
import './user.scss';
import './common.scss';
import { IUser } from './UserContext';
import { useUserContext } from './UserContext';
import { useHistory } from 'react-router-dom';
import { UserBox, Button } from './Styled';

interface IProps {
    user: IUser;
}

export default function User({ user }: IProps){
    const { removeUser } = useUserContext();
    const history = useHistory();
    
    function remove(){  
        removeUser(user.id)
    }

    function redirect(){
        history.push(`/user/${user.id}`)
    }

    const { firstName, lastName, id } = user;
    
    return (
        <UserBox sbet={true}>
            <div onClick={redirect} data-testid={`user-${id}`}>
                <span>{firstName}</span>
                <span>{lastName}</span> 
            </div>
            <Button onClick={remove} >Usuń</Button>
        </UserBox>
    )
}