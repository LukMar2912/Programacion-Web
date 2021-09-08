import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrivenComponent } from './driven/driven.component';
import { ValidarDrivenComponent } from './validar-driven/validar-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ValidarReactiveComponent } from './validar-reactive/validar-reactive.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    ValidarDrivenComponent,
    ReactiveComponent,
    ValidarReactiveComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
