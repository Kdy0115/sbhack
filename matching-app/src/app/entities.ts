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
    first_name      : string;
    last_name       : string;
    email           : string;
    username        : string;
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

export interface AuthUserResponse extends BaseUserResponse {
    password        : string;
    matching_id_id  : number;
}

export interface Status {
    token: string;
}
