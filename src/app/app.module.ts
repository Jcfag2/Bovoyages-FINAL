import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoyageComponent } from './voyage/pages/voyage/voyage.component';
import { VoyageListeComponent } from './voyage/pages/voyage-liste/voyage-liste.component';
import { NavbarComponent } from './voyage/components/navbar/navbar.component';
import { FooterComponent } from './voyage/components/footer/footer.component';
import { DeviceBgDirective } from './device-bg.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './voyage/components/carousel/carousel.component';
import { VoyagesDetailsComponent } from './voyage/components/voyages-details/voyages-details.component';
import { DestinationDetailsComponent } from './voyage/components/destination-details/destination-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VoyageCreationComponent } from './voyage/pages/voyage-creation/voyage-creation.component';
import { CustomFormsModule } from 'ng2-validation'
import { LoginComponent } from './voyage/pages/login/login.component';
import { VoyagesCommandesComponent } from './voyage/pages/voyages-commandes/voyages-commandes.component';
import { VoyagesCommandesDetailComponent } from './voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component';
import { SignupComponent } from './voyage/pages/signup/signup.component';
import { CheckPasswordDirective } from './voyage/pages/signup/check-password.directive';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataServiceService } from 'src/app/in-memory-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    VoyageComponent,
    VoyageListeComponent,
    VoyagesDetailsComponent,
    NavbarComponent,
    FooterComponent,
    DeviceBgDirective,
    CarouselComponent,
    DestinationDetailsComponent,
    VoyageCreationComponent,
    LoginComponent,
    VoyagesCommandesComponent,
    VoyagesCommandesDetailComponent,
    SignupComponent,
    CheckPasswordDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    FormsModule
  //   HttpClientInMemoryWebApiModule.forRoot(
  //     InMemoryDataServiceService, {dataEncapsulation:false} 
  // ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
