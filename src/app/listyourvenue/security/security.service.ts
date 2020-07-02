import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url: string = 'http://localhost:8085/api/user/verification?mobileNumber="917097678509"'
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  

  constructor(private http:HttpClient) { }
  getOTP(number: any):Observable<any>{
    return this.http.post(url+"/security",number);
  }
}
