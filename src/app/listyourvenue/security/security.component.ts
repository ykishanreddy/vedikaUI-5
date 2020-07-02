import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './security.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  securityForm: FormGroup;

  SecurityForm;
  OwnerSecurity ;

  private otpstatus: any;
  // myForm: FormGroup;
  // @Input() var_one;
  constructor(
    private router: Router,
    private locser: SecurityService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService,
    ) { }
  
  ngOnInit() {
    this.OwnerSecurity = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerSecurity')));
    this.SecurityForm = this._fb.group({
      Phonenumber: new FormControl(this.OwnerSecurity?this.OwnerSecurity.phonenumber:'', Validators.required),
    });

  }

  // public insert(number: any): any {
  //   this.security.getOTP(number).subscribe((posRes) => {
  //     if (posRes.insert == "success") {
  //       this.var_one.push(number);
  //     } this.otpstatus = posRes;
  //   })
  // }
  back() {
    this.router.navigateByUrl("/photos")
  }
  next(){
      this.OwnerSecurity = {
        Phonenumber: this.SecurityForm.get('Phonenumber').value,
  
      }
      
      this.localstorageService.set("OwnerSecurity", JSON.stringify(this.OwnerSecurity));
      this.router.navigateByUrl("/payment")
  
  }

  // onclick() {
  //   this.security.getOTP().subscribe(data =>{

  //   console.log(data);

  //   })
  // this.router.navigateByUrl("/verification")
  // }

}
