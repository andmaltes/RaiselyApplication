import * as actions from './error-modal.actions';
import { initialErrorModalState, reducer } from './error-modal.reducers';
import * as selectors from './error-modal.selectors';

import { IErrorModalState } from './error-modal.interface';

export * from './error-modal.actions';
export * from './error-modal.reducers';
export * from './error-modal.selectors';

export {
    IErrorModalState,
    actions,
    initialErrorModalState,
    reducer,
    selectors,
};
