import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  // getitem(arg0: string): string {
  //   throw new Error("Method not implemented.");
  // }

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  set(key, value) {
    this.storage.set(key, value);
  }
  
  get(key) {
    return this.storage.get(key);
  }
  // clearAll(key){
  //   window.localStorage.clear(key);
  // }
  // removeItem() 
  // {
  //   localStorage.removeItem("key");
  // }
  // window.addEventListener('load', function (e) {
  //   if (window.sessionStorage !== null && (window.location.href.indexOf('/signin') === -1 &&  window.location.href.indexOf('confirm-user') === -1)) {
  //     window.sessionStorage.clear();
  //     window.location.href = '/signin';
  //   }
  // });
//   app.controller('LogoutController',function($location, $scope, $window){
//     $window.localStorage.clear();
//     $location.path('/');
// });
}
