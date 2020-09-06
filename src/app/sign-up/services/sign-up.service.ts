import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckUserResponse } from '../model/checkUserResponse';
import { Observable } from 'rxjs';
import { CheckUserRequest } from '../model/checkUserRequest';
import { SignUpRequest } from '../model/signUpRequest';
import { SignUpResponse } from '../model/signUpResponse';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor(private http: HttpClient) {
    }


    public checkUser(request: CheckUserRequest): Observable<CheckUserResponse> {
        return this.http
            .post<CheckUserResponse>('https://api.raisely.com/v3/check-user', request);
    }

    public signUp(request: SignUpRequest): Observable<SignUpResponse> {
        return this.http
            .post<SignUpResponse>('https://api.raisely.com/v3/signup', request);
    }

}
