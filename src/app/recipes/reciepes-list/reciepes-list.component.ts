import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-reciepes-list',
  templateUrl: './reciepes-list.component.html',
  styleUrl: './reciepes-list.component.css',
})
export class ReciepesListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  updatedRecipeListSubscription : Subscription;
  constructor(private recipeService: RecipeService,private router : Router, private route : ActivatedRoute) {}


  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    this.updatedRecipeListSubscription=this.recipeService.updatedRecipes.subscribe((updatedRecipes : Recipe[])=>{
      this.recipes=updatedRecipes
    })
  }
  onNewRecipeClick() {
      this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy(): void {
    this.updatedRecipeListSubscription.unsubscribe();
  }
}
