import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe-services/recipe.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-reciepe-items',
  templateUrl: './reciepe-items.component.html',
  styleUrl: './reciepe-items.component.css',
})
export class ReciepeItemsComponent {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private router : Router) {}

  onRecipeClick() {
    this.router.navigate(['/recipe','1'])
    this.recipeService.recipeSelectedForDetails.emit(this.recipe); 
  }
}
