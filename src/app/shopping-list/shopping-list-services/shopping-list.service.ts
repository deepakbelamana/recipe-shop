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

  getIngredient(index : number) {
    return this.ingredients[index];
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

  updateIngredients(index: number,updatedIngredient:Ingredient) {
    this.ingredients[index]=updatedIngredient
    this.updatedIngredients.next(this.getIngredients());
  }

  removeIngredient(index : number) {
    this.ingredients.splice(index,1);
    this.updatedIngredients.next(this.getIngredients());
  }
}
