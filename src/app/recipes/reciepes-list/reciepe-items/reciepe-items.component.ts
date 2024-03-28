import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.mode';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-reciepe-items',
  templateUrl: './reciepe-items.component.html',
  styleUrl: './reciepe-items.component.css'
})
export class ReciepeItemsComponent {
  @Input() recipe : Recipe
  @Output() recipeSelected = new EventEmitter <void>();

  onRecipeClick() {
    this.recipeSelected.emit();
  }
}
