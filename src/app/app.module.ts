import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { FormMcComponent } from './components/form-mc/form-mc.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMcComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
