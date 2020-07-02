import { Component, OnInit } from '@angular/core';
import { SearchbarService } from 'src/app/searchbar/searchbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionhallpage',
  templateUrl: './functionhallpage.component.html',
  styleUrls: ['./functionhallpage.component.css']
})
export class FunctionhallpageComponent implements OnInit {
  
  temp;
  functionHall=[];
  searchParam: any;
  filteredData: any[];
  constructor(
    private searchSvc: SearchbarService,
    private router: Router
    ) { }

  ngOnInit(): void {
  //   this.searchSvc.getAllFunctionHalls()
  //       .subscribe( Response => {
      
  //     this.functionHalls = Response["functionHalls"]
  //       console.log(this.functionHalls)
  // },(error) => { console.log(error);})
  // }
  this.temp = this.router.url.split("/").slice(-1).pop();
  localStorage.getItem("searchItem")
  console.log(this.temp);
  
 this.getFunctionHallData();
}
getFunctionHallData() {
  //  this.functionHall = [];
  //  var me = this
 let searchvalue = localStorage.getItem("searchItem")

    this.searchSvc.findFunctionhallByNameAndCity(searchvalue)
    .subscribe( Response => {
    let resData =Response.functionHalls;
    console.log(resData,"res")
      // let res Response;
      console.log(this.temp,"28");
      resData.forEach(element => {
        if(this.temp == element.ownerId){
          console.log(element);
    this.functionHall.push(element)
        }
      });
  // console.log(Response,"response")
  
  },(error) => { console.log(error);})
  }
}   