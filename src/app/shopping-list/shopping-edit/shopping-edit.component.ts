import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {

editIndexSubscription : Subscription
editIndex : number
editMode : boolean = false
constructor(private shoppingListService : ShoppingListService) {

}
  ngOnInit(): void {
    this.editIndexSubscription = this.shoppingListService.startedEditing.subscribe(
      (index : number) =>{
        this.editIndex=index
        this.editMode=false
      }
    )
  }
  onAddingIngridient(ingEditForm : NgForm) {
      const ingEditFormValue = ingEditForm.value;
      const newIngredient = new Ingredient(ingEditFormValue.name,ingEditFormValue.amount);
      this.shoppingListService.addIngredient(newIngredient);
  }

}
