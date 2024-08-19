import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthserviceService } from './authservice.service';
import { Observable } from 'rxjs';

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
    let authObservable = new Observable<AuthResponse>();
    if(this.isLoginMode){
    authObservable= this.authService.loginUser(email,password)
    }else{
      this.isLoading=true;
      authObservable=this.authService.signUpUser(email,password)
    }

    authObservable.subscribe(response => {
      if(this.error){
        this.error=null  // Reset the error message if any exists before new error occurs.
        this.isLoading=false;  // Reset the loading state after error occurs.
      }
      console.log(response);
      this.isLoading=false;

      },err=>{
        console.log(err);
        this.error=err
        this.isLoading=false;
      }
      )
    form.reset();  // Reset the form after submission
  }
}
