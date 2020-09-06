import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpFormComponent } from './sign-up/sign-up-container/sign-up-form/sign-up-form.component';
import { SignupContainerComponent } from './sign-up/sign-up-container/signup-container.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [SignUpFormComponent, SignupContainerComponent],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class SignUpModule {
}
