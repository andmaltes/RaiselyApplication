export interface Data {
    email: string;
}

export interface CheckUserRequest {
    campaignUuid: string;
    data: Data;
}

