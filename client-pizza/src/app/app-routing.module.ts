import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './view0/pizza-form/pizza-form.component';
import { DetailsFormComponent } from './view1/details-form/details-form.component';
import { ConfirmationPageComponent } from './view2/confirmation-page/confirmation-page.component';

const routes: Routes = [ 
  { path: "", component: PizzaFormComponent },
  { path: "details", component: DetailsFormComponent }, 
  { path: "details/confirmation", component: ConfirmationPageComponent }, 
  // { path: "", component: PizzaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
