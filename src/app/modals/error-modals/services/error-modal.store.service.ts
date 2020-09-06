import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IErrorModalState } from '../store';
import * as actions from '../store/error-modal.actions';
import * as selectors from '../store/error-modal.selectors';

@Injectable({
    providedIn: 'root',
})
export class ErrorModalStoreService {
    constructor(private store: Store<IErrorModalState>) {
    }

    public clearErrors(): void {
        this.store.dispatch(actions.clearErrors());
    }

    public selectErrors(): Observable<string[]> {
        return this.store.select(selectors.selectErrors);
    }

    public selectModal(): Observable<boolean> {
        return this.store.select(selectors.selectModal);
    }

    public setError(error: string): void {
        this.store.dispatch(actions.setError({ error }));
        this.setModal(true);
    }

    public setModal(open: boolean): void {
        this.store.dispatch(actions.setModal({ open }));
    }
}
