import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Aplicaciones 5, 6
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule //Aplicacion 5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
