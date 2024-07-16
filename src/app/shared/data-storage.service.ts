import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe-services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

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
    return this.http.get<Recipe[]>(
      'https://course-recipe-book-533ff-default-rtdb.firebaseio.com/recipes.json'
    ).pipe(
      map(
        recipes =>{
          return recipes.map(
            recipe => {
              return {...recipe,ingredients:recipe.ingredients? recipe.ingredients : []}
            }
          ) 
        } 
      ),
      tap( recipes=>this.recipeService.setRecipes(recipes))
    )
  }
}
