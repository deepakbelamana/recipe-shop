import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list-services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  updatedRecipes = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    // new Recipe(
    //   'Tasty Schnitzel',
    //   'A super-tasty Schnitzel just awesome!',
    //   'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //   [
    //   new Ingredient ('Meat', 1),
    //   new Ingredient('French Fries', 20)
    //   ]),
    //   new Recipe('Big Fat Burger',
    //   'What else you need to say?',
    //   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //   [
    //   new Ingredient('Buns', 2),
    //   new Ingredient('Meat', 1)
    //   ])
  ];

  constructor(private shoppingListService : ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeById(id: number){
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients : Ingredient[])
   {
      this.shoppingListService.addIngredientsFromRecipeDetailComponent(ingredients);
   }

   addRecipe(newRecipe : Recipe) {
    this.recipes.push(newRecipe);
    this.updatedRecipes.next(this.recipes);
   }
   updateRecipe(index:number, updatedRrecipe:Recipe) {
    this.recipes[index] = updatedRrecipe;
    this.updatedRecipes.next(this.recipes);
   }

   deleteRecipe(index : number){
    this.recipes.splice(index,1);
    this.updatedRecipes.next(this.getRecipes());
   }

   setRecipes(recipes: Recipe[]){
    this.recipes=recipes;
    this.updatedRecipes.next(this.recipes);
   }
}
