import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import {ContactoComponent} from "./contacto/contacto.component";
import {LugaresService} from "./services/lugares.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CrearComponent} from "./crear/crear.component";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent}

];


export const firebaseConfig = {
    apiKey: "AIzaSyDrvDcVYFaKbT4xFDKNDV5qi4QbtgE2iyI",
    authDomain: "platzisquare-dc0be.firebaseapp.com",
    databaseURL: "https://platzisquare-dc0be.firebaseio.com",
    projectId: "platzisquare-dc0be",
    storageBucket: "platzisquare-dc0be.appspot.com",
    messagingSenderId: "440502660472"
};


@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjdJHaJouM35IYXREAkWce32oL7NcfgEw'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
      HttpModule




  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
