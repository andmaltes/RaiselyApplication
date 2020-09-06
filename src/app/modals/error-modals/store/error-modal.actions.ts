import { createAction, props } from '@ngrx/store';

export const SET_ERROR = '[ERROR] SET_ERROR';
export const CLEAR_ERRORS = '[ERROR] CLEAR_ERRORS';
export const SET_MODAL = '[ERROR] SET_MODAL';


export const setError = createAction(SET_ERROR, props<{ error: string }>());
export const clearErrors = createAction(CLEAR_ERRORS);
export const setModal = createAction(SET_MODAL, props<{ open: boolean }>());
