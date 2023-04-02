import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaFormComponent } from './view0/pizza-form/pizza-form.component';
import { DetailsFormComponent } from './view1/details-form/details-form.component';
import { ConfirmationPageComponent } from './view2/confirmation-page/confirmation-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormComponent,
    DetailsFormComponent,
    ConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
