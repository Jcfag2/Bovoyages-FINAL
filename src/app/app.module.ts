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

@NgModule({
  declarations: [
    AppComponent,
    VoyageComponent,
    VoyageListeComponent,
    VoyagesDetailsComponent,
    NavbarComponent,
    FooterComponent,
    DeviceBgDirective,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
