import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../shared/entities/voyage';
import { VoyageService } from '../../shared/services/voyage.service';
import { DatesVoyages } from '../../shared/entities/datesVoyages';
import { DestinationService } from '../../shared/services/destination.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-voyage-liste',
  templateUrl: './voyage-liste.component.html',
  styleUrls: ['./voyage-liste.component.css']
})
export class VoyageListeComponent implements OnInit {
  datesVoyages: DatesVoyages[];

  constructor(private destinationService: DestinationService, private router: Router) { }

  ngOnInit() {
    this.destinationService.getAllDestinationsMoinsCher().subscribe(
      (datesVoyages) => { this.datesVoyages = datesVoyages}
      )
      console.log(this.datesVoyages);
      
      //  this.destinationService.getAllDestinationsMoinsCher().subscribe(
        //    (datesVoyages) => { this.datesVoyages = datesVoyages}
        //  )
        
        //  $('select').selectpicker();
        
        
        //  $(document).ready(function() {
          //   $('.mdb-select').materialSelect();
          // });
          //   $(document).ready(function() {
            //     $('#boot-multiselect-demo').multiselect({
              //     includeSelectAllOption: true,
              //     buttonWidth: 250,
              //     enableFiltering: true
              // });
              // });
            }
      // onClick(){    
      //   this.router.navigate(['/destination-details/:id']);
      // }
  }
          