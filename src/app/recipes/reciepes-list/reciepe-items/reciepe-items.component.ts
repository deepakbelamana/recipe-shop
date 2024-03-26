import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.mode';

@Component({
  selector: 'app-reciepe-items',
  templateUrl: './reciepe-items.component.html',
  styleUrl: './reciepe-items.component.css'
})
export class ReciepeItemsComponent {
  @Input() recipe : Recipe
}
