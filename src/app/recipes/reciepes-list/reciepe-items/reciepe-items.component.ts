import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.mode';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe-services/recipe.service';

@Component({
  selector: 'app-reciepe-items',
  templateUrl: './reciepe-items.component.html',
  styleUrl: './reciepe-items.component.css',
})
export class ReciepeItemsComponent {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  onRecipeClick() {
    this.recipeService.recipeSelectedForDetails.emit(this.recipe);
  }
}
