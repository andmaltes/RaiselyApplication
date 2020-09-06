import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorModalStoreService } from '../services/error-modal.store.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-error-modal',
    templateUrl: './error-modal.component.html',
    styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements OnInit {

    public errorList$: Observable<string[]>;

    constructor(private errorModalStoreService: ErrorModalStoreService,
                private dialogRef: MatDialogRef<ErrorModalComponent>
    ) {
    }

    public close = () => {
        this.errorModalStoreService.setModal(false);
        this.errorModalStoreService.clearErrors();
        this.dialogRef.close();
    }

    public ngOnInit(): void {
        this.errorList$ = this.errorModalStoreService.selectErrors();
    }
}
