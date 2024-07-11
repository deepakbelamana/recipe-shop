import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe-services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService : RecipeService,private http : HttpClient) { }

  saveRecipiesToFirebase(){
    const recipes:Recipe[]=this.recipeService.getRecipes()
    this.http.put('https://course-recipe-book-533ff-default-rtdb.firebaseio.com/recipes.json',
      recipes
    ).subscribe(
      (response)=> {
        console.log(response);
      }
    )
  }

  fetchRecipesFromFireBase(){
    this.http.get<Recipe[]>(
      'https://course-recipe-book-533ff-default-rtdb.firebaseio.com/recipes.json'
    ).subscribe(
      (recipes) => {
        this.recipeService.setRecipes(recipes)
      }
    )
  }
}
