import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './voyage/components/carousel/carousel.component';
import { VoyageListeComponent } from './voyage/pages/voyage-liste/voyage-liste.component';
import { VoyageComponent } from './voyage/pages/voyage/voyage.component';
import { VoyagesDetailsComponent } from './voyage/components/voyages-details/voyages-details.component';
import { DestinationDetailsComponent } from './voyage/components/destination-details/destination-details.component';
import { VoyageCreationComponent } from './voyage/pages/voyage-creation/voyage-creation.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './voyage/pages/login/login.component';
import { VoyagesCommandesComponent } from './voyage/pages/voyages-commandes/voyages-commandes.component';
import { VoyagesCommandesDetailComponent } from './voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component';
import { SignupComponent } from './voyage/pages/signup/signup.component';
import { VoyageConfirmationCommandeComponent } from './voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component';



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: CarouselComponent
   },
   {
    path: 'voyages', component: VoyageComponent
   },
   {
    path: 'destination-details/:id', component: DestinationDetailsComponent
   },
   {
    path: 'voyage-creation/:id', component: VoyageCreationComponent, canActivate: [ AuthGuardService ]
   },
   {
    path: 'voyage-confirmation', component: VoyageConfirmationCommandeComponent
   },
   {
    path: 'voyages-commandes', component: VoyagesCommandesComponent
   },
   {
    path: 'voyages-commandes-detail/:id', component: VoyagesCommandesDetailComponent
   },
   {
    path: 'signup', component: SignupComponent,
   },
  {
   path: '**', redirectTo: 'home' //ou 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
