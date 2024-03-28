import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-reciepes-detail',
  templateUrl: './reciepes-detail.component.html',
  styleUrl: './reciepes-detail.component.css'
})
export class ReciepesDetailComponent {
  @Input() recipeSelectedFromRecipeList : Recipe;

  
}
