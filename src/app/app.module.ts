import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistreerComponent } from './components/registreer/registreer.component';
import {AppRoutingModule} from './app-routing.module';
import { InloggenComponent } from './components/inloggen/inloggen.component';
import { ArtikelenComponent } from './components/artikelen/artikelen.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistreerComponent,
    InloggenComponent,
    ArtikelenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
