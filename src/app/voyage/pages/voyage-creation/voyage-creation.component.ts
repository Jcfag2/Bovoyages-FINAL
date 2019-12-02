import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { DatesVoyages } from '../../shared/entities/datesVoyages';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';
import { FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-voyage-creation',
  templateUrl: './voyage-creation.component.html',
  styleUrls: ['./voyage-creation.component.css']
})
export class VoyageCreationComponent implements OnInit {
  @Input() datesVoyages : DatesVoyages;
  form: FormGroup;

  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (map)=> {
        const id = +map.get('id');
        this.destinationService.getdatesVoyages(id).subscribe(
          datesVoyages => {
            this.datesVoyages = datesVoyages;
            console.log(this.datesVoyages)
          },
            error => console.log(" Error is : " + error),
            () => console.log("finished")
          );
      }
    )
    
    this.form = new FormGroup({
      
    })



  $('.btn-minuse').on('click', function(){
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
  })
  
  $('.btn-pluss').on('click', function(){ 
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
  })
  }

  // $('.btn-number').click(function(e){
  //   e.preventDefault();
  
  //   var fieldName = $(this).attr('data-field');
  //   var type      = $(this).attr('data-type');
  //   var input = $("input[name='"+fieldName+"']");
  //   var reverseInput = $("button[data-field='" + fieldName + "'][data-type!='" + type + "']");
  //   var currentVal = parseInt(input.val());
    
  //   if (!isNaN(currentVal)) {
  //     if(type == 'minus') {
  //       $(reverseInput).attr('disabled', false);
  //       var minValue = parseInt(input.attr('min')); 
  //       if(!minValue) minValue = 1;
  //       if(currentVal > minValue) {
  //         input.val(currentVal - 1).change();
  //       } 
  //       if(parseInt(input.val()) == minValue) {
  //         $(this).attr('disabled', true);
  //       }
  //     } else if(type == 'plus') {
  //       $(reverseInput).attr('disabled', false);
  //       var maxValue = parseInt(input.attr('max'));
  //       if(!maxValue) maxValue = 9;
  //       if(currentVal < maxValue) {
  //         input.val(currentVal + 1).change();
  //       }
  //       if(parseInt(input.val()) == maxValue) {
  //         $(this).attr('disabled', true);
  //       }
  //     }
  //   } else {
  //     input.val(0);
  //   }
  // });
  

  onSubmit(f){
    console.log(f);
  }

  

}
