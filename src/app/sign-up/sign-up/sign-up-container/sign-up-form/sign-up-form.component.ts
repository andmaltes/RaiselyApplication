import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorModalStoreService } from '../../../../modals/error-modals/services/error-modal.store.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SignUpService } from '../../../services/sign-up.service';
import { CheckUserRequest } from '../../../model/checkUserRequest';
import { CheckUserResponse } from '../../../model/checkUserResponse';
import { SignUpRequest } from '../../../model/signUpRequest';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../../modals/confirmation-moldal/confirmation-modal.component';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit, OnDestroy {
    public destroy$: Subject<boolean> = new Subject<boolean>();
    signupForm: FormGroup = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirmPassword: ['', Validators.required],
        password: ['', Validators.required]
    }, {
        validator: this.validatePassword()
    });
    hidePassword = true;
    hidePasswordConfirmation = true;
    debounceTime = 500;
    userExists: EnumUserExists = EnumUserExists.initial;
    EnumUserExists = EnumUserExists;

    constructor(private formBuilder: FormBuilder,
                private errorModalStoreService: ErrorModalStoreService,
                private signUpService: SignUpService,
                private matDialog: MatDialog) {

    }


    public ngOnDestroy(): void {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

    validatePassword() {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls.password;
            const matchingControl = formGroup.controls.confirmPassword;
            if (matchingControl.errors && !matchingControl.errors.validatePassword) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ validatePassword: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    ngOnInit(): void {
        this.signupForm.controls.email.valueChanges.pipe(
            map((email: string) => {
                this.userExists = EnumUserExists.initial;
                return email;
            }),
            debounceTime(this.debounceTime),
            distinctUntilChanged(),
            takeUntil(this.destroy$),
            filter(() => !this.signupForm.controls.email.errors),
            switchMap((email: string) => {
                this.userExists = EnumUserExists.checking;
                const request: CheckUserRequest = {
                    campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                    data: {
                        email
                    }
                };
                return this.signUpService.checkUser(request);
            }),
            map((response: CheckUserResponse) => {
                switch (response.data.status) {
                    case 'OK':
                        this.userExists = EnumUserExists.valid;
                        this.signupForm.controls.email.setErrors(null);
                        break;
                    case 'EXISTS':
                        this.userExists = EnumUserExists.exists;
                        this.signupForm.controls.email.setErrors({ exists: true });
                        break;
                    default:
                        this.userExists = EnumUserExists.error;
                        this.signupForm.controls.email.setErrors({ unknown: true });
                        break;
                }
            })
        ).subscribe(
            response => {
            },
            err => {
                this.errorModalStoreService.setError('Something has happened. Our IT department is working on it');
                console.log(err);
            }
        );
    }

    submit() {
        if (this.signupForm.invalid) {
            this.errorModalStoreService.setError('Please verify that the information is completed and valid.');
        } else if (this.userExists === EnumUserExists.initial || this.userExists === EnumUserExists.checking) {
            this.errorModalStoreService.setError('We are verifying if the email address exists. Please allow us one more minute.');
        } else {
            const request: SignUpRequest = {
                campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                data: {
                    email: this.signupForm.controls.email.value,
                    firstName: this.signupForm.controls.firstName.value,
                    lastName: this.signupForm.controls.lastName.value,
                    password: this.signupForm.controls.password.value,

                }
            };
            this.signUpService.signUp(request).pipe(
                takeUntil(this.destroy$)
            ).subscribe(
                response => {
                    const dialogConfig = new MatDialogConfig();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    const reference = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
                    reference.componentInstance.message = response.message;
                    this.signupForm.reset();
                },
                err => {
                    this.errorModalStoreService.setError('Something has happened. Our IT department is working on it');
                    console.log(err);
                }
            );
        }
    }
}

export enum EnumUserExists {
    initial,
    checking,
    exists,
    valid,
    error
}
