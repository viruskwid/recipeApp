import { Component, OnInit } from '@angular/core';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  page: number = 1
  title = 'Class-test';
  searchKey:string=""
  image:string = 'https://cdn.dummyjson.com/recipe-images/1.webp'
  
  recipieDetails:any = []

  constructor(private api:RecipeService){}

  ngOnInit(): void {
    this.getAllRecipeDetails()
  }
  getAllRecipeDetails(){
    this.api.getRecipeDetails().subscribe({
      next:(res:any)=>{
        this.recipieDetails = res.recipes
        console.log(res);
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
    })
  }

  sortByLunch(){
    this.recipieDetails.mealType.Lunch

  }
  sortByDinner(){
    this.recipieDetails.sort((user1:any,user2:any)=>user1.Dinner.localeCompare(user2.Dinner))

  }
  sortBySnack(){

  }
}
