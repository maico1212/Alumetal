import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl:string = "https://identitytoolkit.googleapis.com/v1/";
  apiKey: string = "AIzaSyAyQounfB8PJETviavoX2KAhwTBIm_-UuY";

  constructor( private http: HttpClient) { }

  register(user: any):Observable<any>{
    let body = user;
   
    return this.http.post(this.apiUrl+ "accounts:signUp?key=AIzaSyAyQounfB8PJETviavoX2KAhwTBIm_-UuY",body,{


    });
  }

  login(user: any):Observable<any>{
    let body = user;
   
    return this.http.post(this.apiUrl+ "accounts:signInWithPassword?key=AIzaSyAyQounfB8PJETviavoX2KAhwTBIm_-UuY",body,{

      
    });
    
  }



}

