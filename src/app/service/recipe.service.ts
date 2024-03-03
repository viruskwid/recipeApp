import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  SERVER_URL : string = "https://dummyjson.com/recipes"
  constructor(private http:HttpClient) { }

  getRecipeDetails(){
    return this.http.get(this.SERVER_URL)
  }
}
