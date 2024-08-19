import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user';


export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})



export class AuthserviceService {

  constructor(private http:HttpClient) { }

  user = new Subject<User>();

  signUpUser(email:string, password:string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARZv5kCPAPpS7ppq8xaVz4cEgjcoPSkrA',
      {email:email,
       password:password,
       returnSecureToken:true
      }).pipe(
        catchError(this.handleError), tap(this.handleuser)
      );
  }

  private handleuser(response: AuthResponse){
    const expirationDate = new Date().getTime()+ +response.expiresIn;
    const user = new User(response.email,response.localId,response.idToken, new Date(expirationDate));
    this.user.next(user)
  }
  loginUser(email:string, password:string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARZv5kCPAPpS7ppq8xaVz4cEgjcoPSkrA',
      {email:email,
       password:password,
       returnSecureToken:true
      }).pipe(
        catchError(this.handleError), tap(this.handleuser)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "an error occurred while signing";
    if(!error.error || !error.error.error){
      return throwError(errorMessage);
    }
    else{
      switch(error.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = "Email already exists";
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = "Email doesn't exists";
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = "invalid login credentials";
          break;
        default:
          errorMessage = "An unexpected error occurred";
      }
      return throwError(errorMessage);
    }
  }
}
