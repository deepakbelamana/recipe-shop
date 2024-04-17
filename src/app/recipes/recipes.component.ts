import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe-services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipeSelectedTosendForDetailComponent: Recipe;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.recipeSelectedForDetails.subscribe((recipe: Recipe) => {
      this.recipeSelectedTosendForDetailComponent = recipe;
    });
  }
}
