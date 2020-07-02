import { LocationService } from './location.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  locationForm: FormGroup;

  // Country;
  LocationForm;
  OwnerLocation ;

  // var_one: any;
  // insertStatus: any;

  constructor(
    private router: Router,
    private locser: LocationService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService,
    ) { }

  ngOnInit() {

    this.OwnerLocation = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerLocation')));
    this.LocationForm = this._fb.group({
      Streetaddress: new FormControl(this.OwnerLocation?this.OwnerLocation.Streetaddress:'', Validators.required),
      State: new FormControl(this.OwnerLocation?this.OwnerLocation.State:'', Validators.required),
      City: new FormControl(this.OwnerLocation?this.OwnerLocation.City:'', Validators.required),
      Unitnumber: new FormControl(this.OwnerLocation?this.OwnerLocation.Unitnumber:'', Validators.required),
      Postalcode: new FormControl(this.OwnerLocation?this.OwnerLocation.Postalcode:'', Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')),
      Country: new FormControl(this.OwnerLocation?this.OwnerLocation.Country:'', Validators.required)
    });
    
    
    // if(this.OwnerLocation){
    //   this.locationForm.get('Streetaddress').setValue(this.OwnerLocation.Streetaddress);
    // }
  }
  // if(localStorage.getItem("")){

  //      this.LocationForm = this._fb.group({
  //     Streetaddress: new FormControl([], Validators.required), 
  //     State: new FormControl('', Validators.required),
  //     City: new FormControl('', Validators.required),
  //     Unitnumber: new FormControl('', Validators.required),
  //     Postalcode: new FormControl('', Validators.required),
  //     Country: new FormControl('', Validators.required)
  //   });
  // }
  //     else{   
  // }


  // get Streetaddress() { #@@$^ydfhghigi
  //   return this.LocationForm.get('streetaddress')
  // }

  // get State() {
  //   return this.LocationForm.get('state')
  // }
  // get City() {
  //   return this.LocationForm.get('city')
  // }
  // get Postalcode() {
  //   return this.LocationForm.get('postalcode')
  // }
  back() {
    this.router.navigateByUrl("/dashboard");

  }

  onclick() {

    this.OwnerLocation = {
      Country: this.LocationForm.get('Country').value,
      Streetaddress: this.LocationForm.get('Streetaddress').value,
      Unitnumber: this.LocationForm.get('Unitnumber').value,
      State: this.LocationForm.get('State').value,
      City: this.LocationForm.get('City').value,
      Postalcode: this.LocationForm.get('Postalcode').value,

    }
    
    this.localstorageService.set("OwnerLocation", JSON.stringify(this.OwnerLocation));
    this.router.navigateByUrl("/details")

  }


}
