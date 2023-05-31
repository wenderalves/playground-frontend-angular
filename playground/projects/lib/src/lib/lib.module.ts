import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { ConteudoComponent } from './layouts/conteudo/conteudo.components';
import { HeaderComponent } from './components/header/header.components';



@NgModule({
  declarations: [
    LibComponent,
    ConteudoComponent,
    HeaderComponent
  ],
  imports: [
  ],
  exports: [
    LibComponent,
    ConteudoComponent,
    HeaderComponent
  ]
})
export class LibModule { }
