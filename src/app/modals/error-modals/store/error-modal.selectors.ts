import { createSelector } from '@ngrx/store';
import { IErrorModalState } from './error-modal.interface';

export const selectErrorModalState = (state: any) => (
    state.ErrorModal
);
export const selectModal = createSelector(
    selectErrorModalState,
    (errorModalState: IErrorModalState) => errorModalState.modal,
);
export const selectErrors = createSelector(
    selectErrorModalState,
    (errorModalState: IErrorModalState) => errorModalState.errors,
);
