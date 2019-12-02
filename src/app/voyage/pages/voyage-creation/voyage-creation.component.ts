import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { DatesVoyages } from '../../shared/entities/datesVoyages';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';
import { FormGroup, NgForm, FormArray, FormControl, Validators } from '@angular/forms';
import { VoyageService } from '../../shared/services/voyage.service';
import { Voyage } from '../../shared/entities/voyage';
import { Voyageur } from '../../shared/entities/voyageurs';
declare var $: any;

@Component({
  selector: 'app-voyage-creation',
  templateUrl: './voyage-creation.component.html',
  styleUrls: ['./voyage-creation.component.css']
})
export class VoyageCreationComponent implements OnInit {
  @Input() datesVoyages : DatesVoyages;
  voyage:Voyage;
  voyageurs:Voyageur[];
  form: FormGroup;
  opts: string[] = [
    'Mlle',
    'Mme',
    'M'
  ];
  nom: FormControl;
  prenom: FormControl;
  dateNaissance: FormControl;
  civilite: FormControl;
  displayNom: string;
  displayPrenom: string;
  displayCivilite: string;
  displayDateNaissance: string;

  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router, private voyageService: VoyageService) { }
  
  // get participants():FormArray{
  //   return this.form.get('participants') as FormArray
  // }

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
          
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    // this.form = new FormGroup({
      // 'participants' : new FormArray([
          // new FormControl({
      this.civilite =  new FormControl('', Validators.required),
      this.nom =  new FormControl('', Validators.required),
      this.prenom = new FormControl('', Validators.required),
      this.dateNaissance =  new FormControl('', Validators.required)
          // })
      // ])
    // })
  }

  createForm() {
    this.form = new FormGroup({
      civilite: this.civilite,
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance
    });
    this.voyageurs.push();
  }
  
  onSubmit(form: NgForm){
    if(this.form.valid){
      console.warn(form.value);
      console.log("formulaire envoyé !");
      // this.form.reset();
      // new Voyageur(0, this.civilite, this.prenom, this.nom, this.dateNaissance)
      // this.voyage.
      this.voyageService.createVoyage(this.voyage);
    }

  }
  
  addParticipants(){
    console.log(this.form.value);
    this.displayNom = this.nom.value;
    this.displayPrenom = this.prenom.value;
    this.displayCivilite = this.civilite.value;
    this.displayDateNaissance = this.dateNaissance.value;
  }

   // $('.btn-minuse').on('click', function(){
  //   $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
  // })
  
  // $('.btn-pluss').on('click', function(){ 
  //   $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
  // })
  // }

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
  

}
