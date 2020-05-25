import api from "./ky";
import { IUser } from "./UserContext";

export async function fetchUsers(): Promise<IUser[]>{
    return api.get('users').json<IUser[]>()
}

export async function fetchUser(id: number): Promise<IUser>{
    return api.get(`users/${id}`).json<IUser>()
}

export async function postUser(data: IUser): Promise<IUser>{
    return api.post(`users`, {json: data}).json<IUser>()
}

export async function deleteUser(id: number): Promise<any>{
    return api.delete(`users/${id}`);
}