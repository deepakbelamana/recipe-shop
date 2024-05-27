import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  updateIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.updatedIngredients
      .subscribe((ingredients : Ingredient[])=> {
        this.ingredients=ingredients
      })
  }

  onClickingIngredient(index:number) {
    this.shoppingListService.startedEditing.next(index)
  }
}
