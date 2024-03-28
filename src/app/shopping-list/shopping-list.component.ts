import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients : Ingredient[] = [
    new Ingredient("Apple",10),
    new Ingredient("Tomato",9)
  ]

  updateIngredients(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}
