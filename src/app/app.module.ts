import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BajajHeaderComponent } from './bajaj-header/bajaj-header.component';
import {ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    BajajHeaderComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
