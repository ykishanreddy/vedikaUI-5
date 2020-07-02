import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarService } from './searchbar/searchbar.service';
import { FunctionhallpageComponent } from './functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './listyourvenue/dashboard/dashboard.component';
import { LocationComponent } from './listyourvenue/location/location.component';
import { DetailsComponent } from './listyourvenue/details/details.component';
import { PhotosComponent } from './listyourvenue/photos/photos.component';
import { PaymentComponent } from './listyourvenue/payment/payment.component';
import { SecurityComponent } from './listyourvenue/security/security.component';
import { FormComponent } from './listyourvenue/form/form.component';
import { PaymentdetailsComponent } from './listyourvenue/paymentdetails/paymentdetails.component';
import { UploadfilesComponent } from './listyourvenue/uploadfiles/uploadfiles.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FunctionhallComponent,
    SearchbarComponent,
    HelpComponent,
    LoginComponent,
    FunctionhallpageComponent,
    RegisterComponent,
    DashboardComponent,
    LocationComponent,
    DetailsComponent,
    PhotosComponent,
    PaymentComponent,
    SecurityComponent,
    FormComponent,
    PaymentdetailsComponent,
    UploadfilesComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [SearchbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
