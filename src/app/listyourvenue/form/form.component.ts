import { FormService } from './form.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocalstorageService } from 'src/app/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  infoform: FormGroup;
  InfoForm;
  OwnerForm;

  var_one: any;
  insertStatus: any;


  constructor(
    private router: Router,
    private Forser: FormService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService,
    ) { }

  // get lastname(){
  //   return this.form.get('lastname')
  // }

  ngOnInit() {
    this.OwnerForm = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerForm')));
    this.InfoForm = this._fb.group({
      Firstname: new FormControl(this.OwnerForm?this.OwnerForm.Firstname:'', Validators.required),
      Lastname: new FormControl(this.OwnerForm?this.OwnerForm.Lastname:'', Validators.required),
      Email: new FormControl(this.OwnerForm?this.OwnerForm.Email:'', Validators.required),
      Password: new FormControl(this.OwnerForm?this.OwnerForm.Password:'', Validators.required),
      Functionhallsname: new FormControl(this.OwnerForm?this.OwnerForm.Functionhallsname:'', Validators.required),
      Address: new FormControl(this.OwnerForm?this.OwnerForm.Address:'', Validators.required),
      Address_2: new FormControl(this.OwnerForm?this.OwnerForm.Address_2:'', Validators.required),
      City: new FormControl(this.OwnerForm?this.OwnerForm.City:'', Validators.required),
      // State: new FormControl(this.OwnerForm?this.OwnerForm.State:'', Validators.required),
      Zip: new FormControl(this.OwnerForm?this.OwnerForm.Zip:'', Validators.required)



    });

  }
  // public insert(obj: any): any {
  //   this.formsvc.addform(obj).subscribe((posRes) => {
  //     if (posRes.insert == "success") {
  //       this.var_one.push(obj);
  //     }
  //     this.insertStatus = posRes;
  //   })
  // }
  // onSubmit(){
  //   alert (JSON.stringify(this.form.value));
  // }

  back() {
    this.router.navigateByUrl("/payment")
  }

  onclick() {
    this.OwnerForm = {
      Firstname: this.InfoForm.get('Firstname').value,
      Lastname: this.InfoForm.get('Lastname').value,
      Email: this.InfoForm.get('Email').value,
      Password: this.InfoForm.get('Password').value,
      Functionhallsname: this.InfoForm.get('Functionhallsname').value,
      Address: this.InfoForm.get('Address').value,
      Address_2: this.InfoForm.get('Address_2').value,
      City: this.InfoForm.get('City').value,
      // State: this.InfoForm.get('State').value,
      Zip: this.InfoForm.get('Zip').value,


    }
    
    this.localstorageService.set("OwnerForm", JSON.stringify(this.OwnerForm));

    this.router.navigateByUrl("/paymentdetails")
  }


}
