import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session.service';
import { PizzaForm } from 'src/models/Models';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit{

  sizeOptions = ['small', 'medium', 'large'];
  pizzaOptions = ['Meat Lover', 'Meat Lover Supreme', 'Meat Lover Deluxe'];

  pizzaForm!: FormGroup;

  constructor( private fb: FormBuilder,
              private router: Router,
              private sessionService: SessionService ) {}

  ngOnInit(): void {
    this.pizzaForm = this.createForm();

    if (this.sessionService.isKeyExist("form1")) {
      //@ts-ignore
      const form1 = JSON.parse(this.sessionService.getItem("form1"));
      console.log("....", form1);
      this.pizzaForm.setValue(form1)
    }

    // this.sessionService.flushAll();
  }

  createForm() : FormGroup {
    let grp = this.fb.group({
      pizza: this.fb.control<string>(this.pizzaOptions[0]),
      size: this.fb.control<string>(this.sizeOptions[0]),
      quantity: this.fb.control<number>(0),
    })

    return grp;
  }

  processForm() {
    console.log(this.pizzaForm.value);
    let f = this.pizzaForm.value as PizzaForm;

    this.sessionService.setItem("form1", JSON.stringify(f));
    this.sessionService.peek();

    this.router.navigate(['/details'], {queryParams: f});
  }

}
