import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentdetailsService {

  constructor(private _http: HttpClient) { }
  public addPaymentDetails(obj: any): Observable<any> {
    return this._http.post("https://jsonplaceholder.typicode.com/posts", obj);
  }
}
