import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'console-deets'
})
@NgModule({
    declarations: [Console],
    providers: [Console]
})
export class Console {
    rnm: string;
    constructor(rnm: string, ryr: number) {
        this.rnm = rnm;
    }
}