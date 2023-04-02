import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';
import { SessionService } from 'src/app/session.service';
import { Everything } from 'src/models/Models';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  form!: object;
  everything!: Everything;
  cost!: number;
  totalCost!: number;

  constructor( private activatedRoute: ActivatedRoute,
              private pizzaService: PizzaService,
              private sessionService: SessionService ){}

  ngOnInit(): void {

    //@ts-ignore
    const a = JSON.parse(this.sessionService.getItem("form1"));
    //@ts-ignore
    const b = JSON.parse(this.sessionService.getItem("form2"));
    const c = Object.assign(a, b)
    this.sessionService.removeItem("form1");
    this.sessionService.removeItem("form2");
    
    console.log("...", c);

    this.activatedRoute.queryParams.subscribe(x => {this.form = x;});
    this.pizzaService.postForm(c).subscribe( x => {
      this.everything = x;
      this.cost = this.calcPrice(x.size, x.quantity, x.pizza);
      this.totalCost = this.everything.rush ? this.cost + 2 : this.cost;
    } );

    // this.activatedRoute.queryParams.subscribe(x => {
    //   this.form = x;
    //   this.pizzaService.postForm(this.form)
    // });

  }

  private calcPrice (size: string, quantity: number, pizza: string) : number {

    const sizes: {[size: string] : number} = {'small': 1, 
                  'medium': 1.2, 
                  'large': 1.5};

    const pizzas: {[pizza: string] : number} = {'Meat Lover': 22, 
                                        'Meat Lover Supreme': 25, 
                                        'Meat Lover Deluxe': 30};

    console.log(quantity);
    console.log(pizzas[pizza]);
    console.log(sizes[size]);

    return (quantity * pizzas[pizza] * sizes[size]);

  }
}
