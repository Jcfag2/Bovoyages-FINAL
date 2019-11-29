import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './voyage/components/carousel/carousel.component';
import { VoyageListeComponent } from './voyage/pages/voyage-liste/voyage-liste.component';
import { VoyageComponent } from './voyage/pages/voyage/voyage.component';


const routes: Routes = [
  {
    path: 'home', component: CarouselComponent
   },
   {
    path: 'voyages', component: VoyageComponent
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
