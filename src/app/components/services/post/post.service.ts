import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'https://dummyapi.io/data/api/';
  appID: string = '60995374f84bce3fd7e35937';

  constructor(
    private _http: HttpClient
  ) { }

  getPost():Observable<any> {
    let headers = new HttpHeaders().set('app-id', this.appID);

    return this._http.get(this.baseUrl + 'post', {
      headers: headers
    })
  }
}
