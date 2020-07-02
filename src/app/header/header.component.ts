import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from '../searchbar/searchbar.service';
import { halls } from '../functionhall/models/halls';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public query : string;
  constructor(private searchSvc:SearchbarService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['/register'])

    }

    findFunctionhallByNameAndCity(){
      localStorage.setItem('searchItem',this.query);
      this.router.navigateByUrl("/functionhall")
  
    }
    // getFunctionhallByName(){
    //   localStorage.setItem('searchItem',this.query);
    //   this.router.navigateByUrl("/functionhallpage")
  
    // }
    
    onclick(){
      this.router.navigateByUrl("/dashboard")
    }
   
    
    
    }

    