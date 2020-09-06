export interface Data {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignUpRequest {
    campaignUuid: string;
    data: Data;
}
