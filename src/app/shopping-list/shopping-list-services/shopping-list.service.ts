import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 9),
  ];

  updatedIngredients = new EventEmitter<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.emit(this.getIngredients());
  }

  constructor() {}

  addIngredientsFromRecipeDetailComponent(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.updatedIngredients.emit(this.getIngredients());
  }
}
