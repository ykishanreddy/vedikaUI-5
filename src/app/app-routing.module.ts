import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { FunctionhallpageComponent } from './functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './listyourvenue/dashboard/dashboard.component';
import { LocationComponent } from './listyourvenue/location/location.component';
import { DetailsComponent } from './listyourvenue/details/details.component';
import { PhotosComponent } from './listyourvenue/photos/photos.component';
import { SecurityComponent } from './listyourvenue/security/security.component';
import { PaymentComponent } from './listyourvenue/payment/payment.component';
import { FormComponent } from './listyourvenue/form/form.component';
import { PaymentdetailsComponent } from './listyourvenue/paymentdetails/paymentdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'/header',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
    
  { path:'help', component:HelpComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'location', component: LocationComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'security', component: SecurityComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'form', component: FormComponent},
  { path: 'paymentdetails', component: PaymentdetailsComponent},
  { path:'header',component:HeaderComponent},
  {path: 'searchbar', component: SearchbarComponent},
  {path: 'functionhall', component: FunctionhallComponent},
  {path:'functionhallpage/:id',component:FunctionhallpageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }