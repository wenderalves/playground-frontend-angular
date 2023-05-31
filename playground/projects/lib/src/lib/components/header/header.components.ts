import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    template: `
        <div class="header">
            Header
        </div>
    `,
    styles: [
        `
        :host {
            .header {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                height: 50px;
                width: 100%;
                background: blue;
                color: #fff;
                padding: 0 8px;
            }
        }
        `
    ]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}