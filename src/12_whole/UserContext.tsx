import React, { createContext, useReducer, useContext, useEffect } from 'react';
import api from './ky';

interface IUserContext {
    users: IUser[];
    removeUser: Function;
    addUser: Function;
    getUser: Function;
}

const UserContext = createContext<IUserContext>({users: [], removeUser: () => {}, addUser: () => {}, getUser: () => {}});

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

enum IUserActions {
    ADD_USERS = 'ADD_USERS',
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

function userReducer(state: IUser[], action: {type: IUserActions, payload: any}) {
    switch (action.type) {
        case IUserActions.ADD_USERS:
            return action.payload;
        case IUserActions.ADD:
            const lastId = state[state.length - 1]?.id || 1;
            const newList = state.slice();
            return newList.concat({...action.payload, id: lastId+1});
        case IUserActions.REMOVE:
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
}

export function UserProvider({children}: any){
    const [users, dispatch] = useReducer(userReducer, []);

    function addUsers(data: IUser[]){
        dispatch({type: IUserActions.ADD_USERS, payload: data})
    }

    async function addUser(data: IUser){
        try {
            const resp = await api.post('users', {json: data}).json();
            dispatch({type: IUserActions.ADD, payload: resp});
        } catch (error) {
            console.error(error);
        }
    }

    async function removeUser(id: number){
        try {
            await api.delete(`users/${id}`);
            dispatch({type: IUserActions.REMOVE, payload: id});
        } catch (error) {
            console.error((error));
        }
    }

    async function getUser(id: number): Promise<any>{
        try {
            const user = await api.get(`users/${id}`).json();   
            return user;
        } catch (error) {
            console.error(error);
        }

        // return users.find((user: IUser) => user.id == id)
    }

    useEffect(() => {
        api.get('users').json<IUser[]>().then((response: IUser[]) => {
            addUsers(response)
        }).catch(err => {
            console.error((err));
        })
    }, []);

    return (
        <UserContext.Provider value={{users, addUser, removeUser, getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = (): IUserContext => useContext(UserContext);