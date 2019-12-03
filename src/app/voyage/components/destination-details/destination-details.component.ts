import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() @Output() destination:Destination;
  images = ["monimage.jpg", "lalaa.png"];
  loadingError$ = new Subject<boolean>();
  private sub;
  public error;
  private subscriptions: any =[]; 


  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router) { }
  

  ngOnInit() {
   this.sub = this.activatedRoute.paramMap.subscribe(
      (map)=> {
        const id = +map.get('id');
        this.destinationService.getDestinationById(id).subscribe(
          destination => {
            this.destination = destination;
            // Object.assign({}, [this.destination]);
            // JSON.stringify(this.destination)
            // this.subscriptions = this.destination;
            console.log(this.destination)
          },
            error => console.log(" Error is : " + error),
            () => console.log("finished")
          );
        console.log(this.sub);
      }
    )

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