import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reciepes-detail',
  templateUrl: './reciepes-detail.component.html',
  styleUrl: './reciepes-detail.component.css'
})
export class ReciepesDetailComponent implements OnInit {
  recipeSelectedFromRecipeList: Recipe;
  recipeId:number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router : Router
  ) {

  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipeSelectedFromRecipeList = this.recipeService.getRecipeById(this.recipeId);
    })
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeSelectedFromRecipeList.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route})
    /**
     * alternatively we can use
     * this.router.navigate(['../',this.recipeId,'edit'],{relativeTo:this.route})
     */

  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId)
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
