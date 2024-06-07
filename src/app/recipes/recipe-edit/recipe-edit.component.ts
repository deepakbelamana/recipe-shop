import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe-services/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
    recipeId : number;
    editMode=false;
    recipeForm:FormGroup;
    constructor(private route : ActivatedRoute,private recipeService : RecipeService) {

    }
  ngOnInit(): void {
      this.route.params.subscribe((params : Params)=> {
        this.recipeId=+params['id'];
        this.editMode= params['id']!=null;
        this.initForm()
      })
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode) {
      const editModeRecipe = this.recipeService.getRecipeById(this.recipeId)
      recipeName=editModeRecipe.name;
      recipeImagePath=editModeRecipe.imagePath;
      recipeDescription=editModeRecipe.description;
      if(editModeRecipe.ingredients){
        editModeRecipe.ingredients.forEach((ingredient : Ingredient)=>{
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        })
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients' : recipeIngredients
    })
  }

  onSubmit(){
    console.log(this.recipeForm.value)
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredientToRecipe() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }))
  }
}
