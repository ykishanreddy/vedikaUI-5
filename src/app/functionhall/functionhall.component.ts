import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchbarService } from '../searchbar/searchbar.service';

@Component({
  selector: 'app-functionhall',
  templateUrl: './functionhall.component.html',
  styleUrls: ['./functionhall.component.css']
})
export class FunctionhallComponent implements OnInit {
 
  functionHalls: any;
  query: any; 
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
  
let searchvalue=localStorage.getItem("searchItem")
  console.log(searchvalue)
  this.searchSvc.findFunctionhallByNameAndCity(searchvalue).subscribe(data=>{
    console.log(data);
  this.functionHalls = data["functionHalls"]
  })
  



  // let searchvalue=localStorage.getItem("searchItem")
  // console.log(searchvalue)
//   this.searchSvc.getFunctionhallByName(searchvalue).subscribe(data=>{
//     console.log(data);
//   this.functionHalls = data["functionHalls"]
//  })
}

// getFunctionhallByCity()
// {
//   this.router.navigate(['/functionhallpage', JSON.stringify(this.searchParam)]);

// }


moreInfo(id) {
  console.log(id,"id");
this.router.navigate(['/functionhallpage',id])
}

}