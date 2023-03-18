export interface AuthRequest {
    username        : string;
    password        : string;
    email           : string;
    name            : string;
    gender          : string;
    branch          : string;
    age             : string;
    grade           : number;
    job             : string;
    department      : string;
    project         : string;
    introduction    : string;
    hobby           : string;
    profile         : string;
}

export interface BaseUserResponse {
    id              : number;
    email           : string;
    gender          : string;
    username        : string;
    first_name      : string;
    last_name       : string;
    branch          : string;
    age             : string;
    grade           : number;
    job             : string;
    department      : string;
    project         : string;
    introduction    : string;
    hobby           : string;
    matching_status : string;
    profile         : string;
}

export interface AuthUserResponse extends BaseUserResponse {
    password        : string;
    matching_id_id  : number;
}

export interface Status {
    token: string;
}

export interface UserMessage {
    user: BaseUserResponse;
    message: string;
    datetime: string;
    noData: boolean;
}
