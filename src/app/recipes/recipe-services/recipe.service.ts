import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelectedForDetails = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'this is simply a test',
      'https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'this is another simply a test',
      'https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
