import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http:HttpClient) { }
  public addLocation(obj:any):Observable<any>{
    return this._http.post("https://jsonplaceholder.typicode.com/posts",obj);
  }
}
