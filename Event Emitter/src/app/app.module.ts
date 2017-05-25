import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { componenteEvento } from './eventos/eventos.component'
import { segundoEvento } from './eventos/segundo-evento.component'

@NgModule({
  declarations: [
    AppComponent,
    componenteEvento,
    segundoEvento
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
