import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConnectionComponent } from './components/add-connection/add-connection.component';
import { ConnectionManagerComponent } from './components/connection-manager/connection-manager.component';
import { EditConnectionComponent } from './components/edit-connection/edit-connection.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewConnectionComponent } from './components/view-connection/view-connection.component';

const routes: Routes = [
  {path: '', redirectTo: 'connections/admin', pathMatch: 'full'},
  {path: 'connections/admin', component: ConnectionManagerComponent},
  {path: 'connections/add', component: AddConnectionComponent},
  {path: 'connections/edit/:connectionId', component: EditConnectionComponent},
  {path: 'connections/view/:connectionId', component: ViewConnectionComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
