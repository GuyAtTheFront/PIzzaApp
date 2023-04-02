import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Everything } from 'src/models/Models';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private URL = "/api/pizza"

  constructor( private httpClient: HttpClient ) { }

  postForm(data: object) {
    return this.httpClient.post<Everything>(this.URL, data);
  }

}
