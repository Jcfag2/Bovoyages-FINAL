import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../../shared/entities/destination';
import { DatesVoyages } from '../../shared/entities/datesVoyages';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../shared/services/destination.service';
import { FormGroup, NgForm, FormArray, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoyageService } from '../../shared/services/voyage.service';
import { Voyage } from '../../shared/entities/voyage';
import { Voyageur } from '../../shared/entities/voyageurs';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/entities/client';
declare var $: any;

@Component({
  selector: 'app-voyage-creation',
  templateUrl: './voyage-creation.component.html',
  styleUrls: ['./voyage-creation.component.css']
})
export class VoyageCreationComponent implements OnInit {
  @Input() datesVoyages : DatesVoyages;
  voyage:Voyage;
  voyageurs:Voyageur[] = [];
  voyageur:Voyageur = new Voyageur();
  form: FormGroup;
  error:string;
  civilites: string[] = [
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

  client:Client;
   

  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router, private voyageService: VoyageService, private clientService: ClientService) { }
  
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

    this.clientService.getClientByNom(localStorage.getItem('userName')).subscribe(
      (client) => { this.client = client}
    )


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
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance,
      civilite: this.civilite
    });
    // this.voyageurs.push();
  }
  
  onSubmit(){
    // if(this.form.valid){
      console.warn("voyageurs : "+JSON.stringify(this.voyageurs));
     // this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages);
      console.log("ce que je demande de créer : "+JSON.stringify(this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages)));
      this.voyageService.createVoyage(this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages));
      console.log("formulaire envoyé !");
    // }

  }
  
  addParticipants(){
    // console.log(form.value);
    // this.voyageurs.push(voyageurs);
    // return this;
    // this.displayNom = this.nom.value;
    // this.displayPrenom = this.prenom.value;
    // this.displayCivilite = this.civilites.value;
    // this.displayDateNaissance = this.dateNaissance.value;
    // for(let i=0; i<voyageur.size; i++){
    //   voyageur[i].nom = this.form.get('nom').value;
    //   voyageur[i].prenom = this.form.get('prenom').value;
    //   voyageur[i].dateNaissance = this.form.get('dateNaissance').value;
    // }
    // this.voyageService.createVoyageur(form.value);
      // (error) => this.error = error
    
    this.voyageurs.push(this.voyageur);
    // this.form.reset();
    this.voyageur = new Voyageur();
    console.log(this.voyageurs);
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
