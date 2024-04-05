import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.mode';
import { RecipeService } from '../recipe-services/recipe.service';

@Component({
  selector: 'app-reciepes-detail',
  templateUrl: './reciepes-detail.component.html',
  styleUrl: './reciepes-detail.component.css'
})
export class ReciepesDetailComponent {
  @Input() recipeSelectedFromRecipeList : Recipe;

  constructor(private recipeService : RecipeService) {

  }
  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelectedFromRecipeList.ingredients)
  }
}
