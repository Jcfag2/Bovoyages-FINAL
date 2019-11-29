import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../shared/voyage';
import { VoyageService } from '../../shared/voyage.service';
declare var $: any;

@Component({
  selector: 'app-voyage-liste',
  templateUrl: './voyage-liste.component.html',
  styleUrls: ['./voyage-liste.component.css']
})
export class VoyageListeComponent implements OnInit {
  voyages: Voyage[];

  constructor(private voyageService: VoyageService) { }

  ngOnInit() {
    // this.voyageService.getVoyages().subscribe(
    //   (voyage) => {
    //     this.voyages = voyage
    //   },
    //   (err) => this.loggerService.logError(err)
    // )
   this.voyageService.getVoyages().then(
     (voyages) => {
       this.voyages = voyages;
     }
   )

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

}
