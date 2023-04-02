import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';
import { SessionService } from 'src/app/session.service';
import { PizzaForm } from 'src/models/Models';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit{

  detailForm!: FormGroup;
  pizzaForm!: PizzaForm;

  constructor( private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sessionService: SessionService) {}

  ngOnInit(): void {
    this.detailForm = this.createForm();
    this.activatedRoute.queryParams.subscribe( x => {this.pizzaForm = x as PizzaForm});
  }

  createForm() {
    let grp = this.fb.group({
      name: this.fb.control<string>("default"),
      address: this.fb.control<string>("default"),
      phone: this.fb.control<string>("default"),
      rush: this.fb.control<boolean>(true),
      comment: this.fb.control<string>("default")
    })
    return grp;
  }

  processForm() {
    // console.log(this.detailForm.value);
    // console.log(this.pizzaForm);
    // console.log(Object.assign(this.detailForm.value, this.pizzaForm));
    // this.pizzaService.postForm(data)

    const data = Object.assign(this.detailForm.value, this.pizzaForm);
    this.sessionService.setItem("form2", JSON.stringify(this.detailForm.value));
    this.sessionService.peek();

    this.router.navigate(['/details', 'confirmation'], {queryParams: data});
  }

  onCancel() {
    console.log("cancel cancel cancel!");
    this.sessionService.flushAll();
    this.router.navigate(['..'])
  }

}
