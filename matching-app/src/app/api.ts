import axios, { AxiosResponse } from 'axios';

import * as constants from './constants';
import { AuthRequest, Status } from './entities';

const client = axios.create({
    baseURL: constants.API_BASE_URL,
    timeout: 20000,
    withCredentials: false,
})

export const fetchLogin = async (loginRequest: AuthRequest): Promise<AxiosResponse<Status>> =>
    await client.post(
        '/login',
        {
            loginRequest
        }
    );