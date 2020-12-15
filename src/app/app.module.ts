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
import { AlleArtikelenComponent } from './components/alle-artikelen/alle-artikelen.component';
import { HomeComponent } from './pages/home';
import { EenArtikelComponent } from './components/een-artikel/een-artikel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistreerComponent,
    InloggenComponent,
    ArtikelenComponent,
    AlleArtikelenComponent,
    HomeComponent,
    EenArtikelComponent,
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
