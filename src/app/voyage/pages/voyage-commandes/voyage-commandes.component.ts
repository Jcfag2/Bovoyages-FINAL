import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../shared/entities/client';
import { Voyage } from '../../shared/entities/voyage';
import { VoyageService } from '../../shared/services/voyage.service';

@Component({
  selector: 'app-voyage-commandes',
  templateUrl: './voyage-commandes.component.html',
  styleUrls: ['./voyage-commandes.component.css']
})
export class VoyageCommandesComponent implements OnInit {
  client:Client;
  voyages:Voyage[];

  constructor(private voyageService:VoyageService) { }

  ngOnInit() {
    this.voyageService.getVoyagesClient(this.client).subscribe(
      (voyages) => {
        this.voyages = voyages;
      }
    );
  }

}
