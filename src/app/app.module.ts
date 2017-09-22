import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';


@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjdJHaJouM35IYXREAkWce32oL7NcfgEw'
    })



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
