import axios, { AxiosResponse } from 'axios';

import * as constants from './constants';
import { AuthRequest, Status, BaseUserResponse } from './entities';

const client = axios.create({
    baseURL: constants.API_BASE_URL,
    timeout: 20000,
    withCredentials: false,
})

const token = localStorage.getItem('token');

export const fetchToken = async(userId: string): Promise<AxiosResponse<Status>> =>
    await client.post(
        `/user/token/${userId}`,
        {
            headers: { 
                Authorization: `Token ${token}`
            } 
        }
    )

export const fetchLogin = async (loginRequest: AuthRequest): Promise<AxiosResponse<Status>> =>
    await client.post(
        '/login',
        {
            loginRequest
        }
    );

export const fetchUserById = async (userId: string): Promise<AxiosResponse<BaseUserResponse>> =>
    await client.get(
        `/user/${userId}`,
        { 
            headers: { 
                Authorization: `Token ${token}`
            } 
        }
    );