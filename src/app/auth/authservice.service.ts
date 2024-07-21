import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
      });
  }
}
