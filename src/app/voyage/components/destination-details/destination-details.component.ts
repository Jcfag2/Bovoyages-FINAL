import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() destination:Destination;
  

  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (map)=> {
        const id = +map.get('id');
        this.destinationService.getDestinationById(id).subscribe(
          destination => this.destination = destination
        );
      }
      )
      console.log(this.destination);
    }
}