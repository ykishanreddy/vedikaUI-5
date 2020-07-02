import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentdetailsService } from './paymentdetails.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocalstorageService } from 'src/app/localstorage.service';


@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  PaymentdetailsForm: FormGroup;

  Paymentdetails;
  OwnerPaymentdetails ;
  var_one: any;
  insertStatus: any;

  constructor(
    private router: Router,
    private paydeser: PaymentdetailsService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService,
    ) { }
  ngOnInit() {

    this.OwnerPaymentdetails = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerPaymentdetails')));
    this.PaymentdetailsForm = this._fb.group({
      Bankcountry: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Bankcountry:'', Validators.required),
      Currency: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Currency:'', Validators.required),
      Bankname: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Bankname:'', Validators.required),
      Accountname: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Accountname:'', Validators.required),
      Accountnumber: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Accountnumber:'', Validators.required),
      IFSCcode: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.IFSCcode:'', Validators.required),
      PANnumber: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.PANnumber:'', Validators.required)
    });
   
  }


  // public insert(obj: any): any {
  //   this.PaymentdetailsForm.addPaymentdetailsForm(obj).subscribe((posRes) => {
  //     if (posRes.insert == "success") {
  //       this.var_one.push(obj);
  //     }
  //     this.insertStatus = posRes;
  //   })
  // }
  back() {
    this.router.navigateByUrl("/form")
  }

  submit() {
    
   this.OwnerPaymentdetails = {
    Bankcountry: this.PaymentdetailsForm.get('Bankcountry').value,
    Currency: this.PaymentdetailsForm.get('Currency').value,
    Bankname: this.PaymentdetailsForm.get('Bankname').value,
    Accountname: this.PaymentdetailsForm.get('Accountname').value,
    IFSCcode: this.PaymentdetailsForm.get('IFSCcode').value,
    PANnumber: this.PaymentdetailsForm.get('PANnumber').value,

  }
  
  this.localstorageService.set("OwnerPaymentdetails", JSON.stringify(this.OwnerPaymentdetails));
  this.router.navigateByUrl("/header")

  



}
}
