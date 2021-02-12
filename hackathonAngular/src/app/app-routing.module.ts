import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import {AzubiansichtComponent} from './azubiansicht/azubiansicht.component';
import {EinrichtungsansichtComponent} from './einrichtungsansicht/einrichtungsansicht.component';

const routes: Routes = [
  {path: 'einrichtungsansicht', component: EinrichtungsansichtComponent},
  {path: 'azubiansicht', component: AzubiansichtComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
