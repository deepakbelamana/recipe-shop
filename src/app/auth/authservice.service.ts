import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})



export class AuthserviceService {

  constructor(private http:HttpClient) { }

  signUpUser(email:string, password:string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARZv5kCPAPpS7ppq8xaVz4cEgjcoPSkrA',
      {email:email,
       password:password,
       returnSecureToken:true
      }).pipe(
        catchError(error => {
          let errorMessage = "an error occurred while signing";
          if(!error.error || !error.error.error){
            return throwError(errorMessage);
          }
          else{
            switch(error.error.error.message){
              case 'EMAIL_EXISTS':
                errorMessage = "Email already exists";
                break;
              default:
                errorMessage = "An unexpected error occurred";
            }
            return throwError(errorMessage);
          }
        }
        )
      );
  }
}
