import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true;
  onSwitchMode() {
    this.isLoginMode =!this.isLoginMode;
  }

  onSubmitAuthForm(form:NgForm){
    console.log(form.value);
    form.reset();  // Reset the form after submission
  }
}
