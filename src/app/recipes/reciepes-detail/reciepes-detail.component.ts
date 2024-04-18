import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reciepes-detail',
  templateUrl: './reciepes-detail.component.html',
  styleUrl: './reciepes-detail.component.css'
})
export class ReciepesDetailComponent implements OnInit {
  recipeSelectedFromRecipeList: Recipe;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.recipeSelectedFromRecipeList = this.recipeService.getRecipeById(id);
    })
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelectedFromRecipeList.ingredients)
  }
}
