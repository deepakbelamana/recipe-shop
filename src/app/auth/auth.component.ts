import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading=false;
  error:string=null;
  constructor(private authService: AuthserviceService){

  }
  onSwitchMode() {
    this.isLoginMode =!this.isLoginMode;
  }

  onSubmitAuthForm(form:NgForm){

    var email=form.value.email;
    var password=form.value.password;
    /**
     * add this valid check , such that if user tries enable
     * form by devtools, it should not submit form.
     */
    if(!form.valid){
      return
    }
    if(this.isLoginMode){
      //--------------------------------
    }else{
      this.isLoading=true;
      this.authService.signUpUser(email,password).subscribe(response => {
      console.log(response);
      this.isLoading=false;
      },err=>{
        console.log(err);
        this.error=err
        this.isLoading=false;
      }
      )
    }
    form.reset();  // Reset the form after submission
  }
}
