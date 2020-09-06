import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorModalStoreService } from './modals/error-modals/services/error-modal.store.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorModalComponent } from './modals/error-modals/error-modal/error-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Application';
    public destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private errorModalStoreService: ErrorModalStoreService, private matDialog: MatDialog) {
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

    ngOnInit(): void {
        this.errorModalStoreService.selectModal()
            .pipe(takeUntil(this.destroy$))
            .subscribe((showErrorModal: boolean) => {
                if (showErrorModal) {
                    const dialogConfig = new MatDialogConfig();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    this.matDialog.open(ErrorModalComponent, dialogConfig);
                }
            });
    }
}
