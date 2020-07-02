
import { DetailsService } from './details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm : FormGroup;
  DetailsForm;
  OwnerDetails ;
  constructor(
    private router: Router,
    private details:DetailsService,
    private _fb: FormBuilder,
    private localstorageService: LocalstorageService
    ) { }

  ngOnInit(): void {
    this.OwnerDetails = JSON.parse(JSON.parse(window.localStorage.getItem('OwnerDetails')));
    this.DetailsForm = this._fb.group({

      Headline: new FormControl(this.OwnerDetails?this.OwnerDetails.Headline:'', Validators.required),
      // Functionhalldescription: new FormControl(this.OwnerDetails?this.OwnerDetails.Functionhalldescription:'', Validators.required),
      Functionhalltype: new FormControl(this.OwnerDetails?this.OwnerDetails.Functionhalltype:'', Validators.required),
      Foodtype: new FormControl(this.OwnerDetails?this.OwnerDetails.Foodtype:'', Validators.required),
      Maximumguests: new FormControl(this.OwnerDetails?this.OwnerDetails.Maximumguests:'', Validators.required),

      Roomtype: new FormControl(this.OwnerDetails?this.OwnerDetails.Roomtype:'', Validators.required),

  }
    )}
 


  // form = new FormGroup({

  //   Headline: new FormControl('', Validators.required),
  //   Functionhalltype: new FormControl('', Validators.required),

  // });

//   get Headline(){
//     return this.form.get('Headline')
//   }
//   get Functionhalltype(){
//     return this.form.get("Functionhalltype")
//   }
//   back(){
//     this.router.navigateByUrl("/location")
//     JSON.parse(localStorage.getItem("OwnerDetails"));
//   }

//   next(){
//     this.router.navigateByUrl("/photos")
//   }

// }


back() {
  this.router.navigateByUrl("/location");

}
onclick() {

  this.OwnerDetails = {  

    Headline: this.DetailsForm.get('Headline').value,
    // Functionhalldescription: this.DetailsForm.get('Functionhalldescription').value,
    Functionhalltype: this.DetailsForm.get('Functionhalltype').value,
    Foodtype: this.DetailsForm.get('Foodtype').value,
    Maximumguests: this.DetailsForm.get('Maximumguests').value,
        Roomtype: this.DetailsForm.get('Roomtype').value,


  }
  
  this.localstorageService.set("OwnerDetails", JSON.stringify(this.OwnerDetails));
  this.router.navigateByUrl("/photos")

}


}


