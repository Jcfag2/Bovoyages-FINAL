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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { VoyageCreationComponent } from './voyage/pages/voyage-creation/voyage-creation.component';
import { CustomFormsModule } from 'ng2-validation'
=======
import { LoginComponent } from './voyage/pages/login/login.component';
>>>>>>> jc
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
<<<<<<< HEAD
    VoyageCreationComponent
=======
    LoginComponent,
>>>>>>> jc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  //   HttpClientInMemoryWebApiModule.forRoot(
  //     InMemoryDataServiceService, {dataEncapsulation:false} 
  // ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
