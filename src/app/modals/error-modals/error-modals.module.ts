import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorModalBComponent } from './error-modal/error-modal-b/error-modal-b.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ErrorModalComponent,
        ErrorModalBComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
    ],
})
export class ErrorModalsModule {
}
