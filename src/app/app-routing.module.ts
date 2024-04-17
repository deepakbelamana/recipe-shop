import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReciepesDetailComponent } from './recipes/reciepes-detail/reciepes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch:'full' },
  {
    path: 'shopping-list', component: ShoppingListComponent
  },
  {
    path: 'recipe', component: RecipesComponent,
    children:[
      {path: '', component: RecipeStartComponent},
      {path:':id',component:ReciepesDetailComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
