
export interface Data {
    uuid: string;
    preferredName: string;
    createdAt: Date;
    updatedAt: Date;
    public?: any;
    status: string;
    organisationUuid: string;
    firstName: string;
    lastName: string;
    photoUrl?: any;
}

export interface Warning {
    code: string;
    message: string;
}

export interface SignUpResponse {
    data: Data;
    message: string;
    token: string;
    warnings: Warning[];
}
