import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.mode';
import { RecipeService } from '../recipe-services/recipe.service';

@Component({
  selector: 'app-reciepes-list',
  templateUrl: './reciepes-list.component.html',
  styleUrl: './reciepes-list.component.css',
})
export class ReciepesListComponent implements OnInit {
  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }
}
