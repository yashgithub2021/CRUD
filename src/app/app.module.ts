import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//Material
import { MatTableModule } from '@angular/material/table';
import { CRUDComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
