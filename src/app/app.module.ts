import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddConnectionComponent } from './components/add-connection/add-connection.component';
import { EditConnectionComponent } from './components/edit-connection/edit-connection.component';
import { ConnectionManagerComponent } from './components/connection-manager/connection-manager.component';
import { ViewConnectionComponent } from './components/view-connection/view-connection.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddConnectionComponent,
    EditConnectionComponent,
    ConnectionManagerComponent,
    ViewConnectionComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
