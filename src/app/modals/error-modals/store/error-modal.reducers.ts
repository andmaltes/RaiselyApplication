import { Action, createReducer, on } from '@ngrx/store';
import * as errorActions from './error-modal.actions';
import { IErrorModalState } from './index';

export const initialErrorModalState: IErrorModalState = {
    errors: [],
    modal:  false,
};

export const errorReducer = createReducer(
    initialErrorModalState,
    on(errorActions.setError, (state: IErrorModalState, action: { error: string }) => {
        const newState: IErrorModalState = { ...state};
        const errors: string[]           = [...newState.errors];
        errors.push(action.error);
        newState.errors = [...errors];
        return newState;
    }),
    on(errorActions.clearErrors, (state: IErrorModalState) => {
        const newState: IErrorModalState = { ...state};
        newState.errors                  = [...[]];
        return newState;
    }),
    on(errorActions.setModal, (state: IErrorModalState, action: { open: boolean }) => {
        const newState: IErrorModalState = { ...state};
        newState.modal                   = action.open;
        return newState;
    }),
);

export function reducer(state: IErrorModalState | undefined, action: Action): IErrorModalState {
    return errorReducer(state, action);
}
