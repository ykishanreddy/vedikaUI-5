import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocalstorageService } from 'src/app/localstorage.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  PaymentForm;
  OwnerPayment;

  var_one: any;
  insertStatus: any;

  constructor(
    private router: Router,
    private Payser: PaymentService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService,
    ) { }

  ngOnInit() {
    this.OwnerPayment = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerPayment')));
    this.PaymentForm = this._fb.group({
      perminantcountry: new FormControl(this.OwnerPayment?this.OwnerPayment.perminantcountry:'', Validators.required),
      bankingcountry: new FormControl(this.OwnerPayment?this.OwnerPayment.bankingcountry:'', Validators.required),
    });

  }
  
  back() {
    this.router.navigateByUrl("/security")
  }

  next() {
    this.router.navigateByUrl("/form")
    this.OwnerPayment = {
      perminantcountry: this.PaymentForm.get('perminantcountry').value,
      bankingcountry: this.PaymentForm.get('bankingcountry').value,

    }
    
    this.localstorageService.set("OwnerPayment", JSON.stringify(this.OwnerPayment));

  }

  }


