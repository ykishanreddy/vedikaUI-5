import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http: HttpClient) { }
  public addform(obj: any): Observable<any> {
    return this._http.post("https://jsonplaceholder.typicode.com/posts", obj);
  }
  
}
