import React, { createContext, useReducer, useContext } from 'react';

interface IUserContext {
    users: IUser[];
    removeUser: Function;
    addUser: Function;
}


export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
}

const UserContext = createContext<IUserContext>({users: [], removeUser: () => {}, addUser: () => {}});
enum IUserActions {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
}

function userReducer(state: IUser[], action: {type: IUserActions, payload: any}) {
    switch (action.type) {
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
    
    function addUser(data: IUser){
        dispatch({type: IUserActions.ADD, payload: data})
    }

    function removeUser(id: number){
        dispatch({type: IUserActions.REMOVE, payload: id});
    }

    return (
        <UserContext.Provider value={{users, addUser, removeUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = (): IUserContext => useContext(UserContext);