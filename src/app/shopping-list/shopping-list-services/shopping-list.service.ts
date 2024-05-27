import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 9),
  ];

  startedEditing = new Subject<number>();
  updatedIngredients = new Subject<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.next(this.getIngredients());
  }

  constructor() {}

  addIngredientsFromRecipeDetailComponent(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.updatedIngredients.next(this.getIngredients());
  }
}
