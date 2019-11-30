import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../shared/entities/destination';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() destination:Destination;
 

  constructor() { }

  ngOnInit() {
    console.log(this.destination);
    
  }
}