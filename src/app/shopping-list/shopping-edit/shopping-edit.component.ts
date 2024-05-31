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
  @ViewChild('ingEditForm') ingEditForm: NgForm
  editIndexSubscription: Subscription
  editIndex: number
  editMode: boolean = false
  editingIngredient: Ingredient
  constructor(private shoppingListService: ShoppingListService) {

  }
  ngOnInit(): void {
    this.editIndexSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editIndex = index
        this.editMode = true
        this.editingIngredient = this.shoppingListService.getIngredient(index)
        this.ingEditForm.setValue({
          name: this.editingIngredient.name,
          amount: this.editingIngredient.amount
        })
      }
    )
  }
  onSubmit(Form: NgForm) {
    const ingEditFormValue = Form.value;
    const newIngredient = new Ingredient(ingEditFormValue.name, ingEditFormValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredients(this.editIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode=false;
    Form.resetForm();
  }

  onClear() {
    this.ingEditForm.reset();
    this.editMode=false;
  }

}
