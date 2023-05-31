import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'conteudo',
    template: `
        <div class="conteudo">
            <header></header>
            <div class="corpo">
                conteudo
            </div>
        </div>
    `,
    styles: [
        `
        :host {
            .conteudo {
                display: flex;
                flex-direction: column;
                height: 100vh;
                width: 100vw;
            }

            .corpo {
                padding: 15px
            }
        }
        `
    ]
})

export class ConteudoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}