import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-error-modal-b',
    templateUrl: './error-modal-b.component.html',
    styleUrls: ['./error-modal-b.component.scss'],
})
export class ErrorModalBComponent {
    @Input() public close: () => void;
    public errorList: string[] = [];

    @Input() set errorListInput(errorList: string[]) {
        this.errorList = Array.from(new Set(errorList));
    }

}
