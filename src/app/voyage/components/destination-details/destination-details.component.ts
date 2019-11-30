import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() destination:Destination;
  images = ["monimage.jpg", "lalaa.png"];


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

        $(document).ready(function(){
          $(".btn-group .btn").click(function(){
            var inputValue = $(this).find("input").val();
            if(inputValue != 'all'){
              var target = $('table tr[data-status="' + inputValue + '"]');
              $("table tbody tr").not(target).hide();
              target.fadeIn();
            } else {
              $("table tbody tr").fadeIn();
            }
          });
          // Changing the class of status label to support Bootstrap 4
            var bs = $.fn.tooltip.Constructor.VERSION;
            var str = bs.split(".");
            if(str[0] == 4){
                $(".label").each(function(){
                  var classStr = $(this).attr("class");
                    var newClassStr = classStr.replace(/label/g, "badge");
                    $(this).removeAttr("class").addClass(newClassStr);
                });
            }
        });
    }
    
    // images = this.destination.images.map((n) => `http://127.0.0.1:8081/`+n);

  
    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  
    

}