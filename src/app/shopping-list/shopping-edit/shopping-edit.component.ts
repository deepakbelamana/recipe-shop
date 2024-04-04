import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

@ViewChild('ingredientName') ingredientName : ElementRef;
@ViewChild('ingredientAmount') ingredientAmount : ElementRef;

constructor(private shoppingListService : ShoppingListService) {

}
  onAddingIngridient() {
      const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
      this.shoppingListService.addIngredient(newIngredient);
  }
}
