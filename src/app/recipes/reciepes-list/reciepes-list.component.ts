import { Component } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-reciepes-list',
  templateUrl: './reciepes-list.component.html',
  styleUrl: './reciepes-list.component.css'
})
export class ReciepesListComponent {
  recipes : Recipe[] = [
    new Recipe("Test Recipe", "this is simply a test", "https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg")
  ]
}
