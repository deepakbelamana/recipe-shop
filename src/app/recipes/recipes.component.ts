import { Component } from '@angular/core';
import { Recipe } from './recipe.mode';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  recipeSelectedTosendForDetailComponent:Recipe

  recieveRecipeFromList(recipe:Recipe) {
      this.recipeSelectedTosendForDetailComponent = recipe
  }
}
