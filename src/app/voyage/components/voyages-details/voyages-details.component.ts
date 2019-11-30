import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { Voyage } from '../../shared/entities/voyage';


@Component({
  selector: 'app-voyages-details',
  templateUrl: './voyages-details.component.html',
  styleUrls: ['./voyages-details.component.css']
})
export class VoyagesDetailsComponent implements OnInit {
  @Input() voyage:Voyage;
 

  constructor() { }

  ngOnInit() {
    console.log(this.voyage);
    
  }
  
}
