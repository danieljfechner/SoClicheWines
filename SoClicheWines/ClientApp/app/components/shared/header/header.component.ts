
import { Component } from '@angular/core';

@Component({
    selector: 'shared-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    name: string;

    constructor() {
        this.name = 'Sam';
    }
}
