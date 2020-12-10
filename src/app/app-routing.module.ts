import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistreerComponent } from './components/registreer/registreer.component';
import {InloggenComponent} from './components/inloggen/inloggen.component';

const routes: Routes = [
  { path: 'registreren', component: RegistreerComponent},
  { path: 'inloggen', component: InloggenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
