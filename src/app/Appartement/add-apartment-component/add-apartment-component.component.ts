import { Component } from '@angular/core';
import { Appartment } from 'src/app/Core/Models/appartement';
import { Residence } from 'src/app/Core/Models/residence';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment-component',
  templateUrl: './add-apartment-component.component.html',
  styleUrls: ['./add-apartment-component.component.css']
})
export class AddApartmentComponentComponent {
  addapartement:FormGroup;
  newApart: Appartment = {  // Déclaration de la propriété newApart
    apartNum: 0 ,
    floorNum: 0,
    surface: 0,
    terrace: true,
    surfaceterrace: 0,
    category: '',
    ResidenceId: 0
  };
  residences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

  constructor (private fb:FormBuilder){
    this.addapartement=this.fb.group({
      apartNum: [null, [Validators.required, Validators.pattern('^[0-9]*$')]], // Numéro d'appartement (chiffres uniquement)
      floorNum: [null, [Validators.required, Validators.pattern('^[0-9]*$')]], // Étage (chiffres uniquement)
      surface: [null, [Validators.required]], // Surface (obligatoire)
      terrace: [false], // Terrasse (checkbox)
      surfaceterrace: [{ value: null, disabled: true }], // Surface terrasse (désactivé par défaut)
      category: [null, [Validators.required]], // Catégorie (obligatoire)
      ResidenceId: [null, [Validators.required]], // ID de la résidence (obligatoire)
    });

    // Activer ou désactiver le champ "surfaceterrace" selon l'état de "terrace"
    this.addapartement.get('terrace')?.valueChanges.subscribe((value) => {
      if (value) {
        this.addapartement.get('surfaceterrace')?.enable();
      } else {
        this.addapartement.get('surfaceterrace')?.disable();
      }
    });
    

  }
  onSubmit() {
    if (this.addapartement.valid) {
      const newApartment = this.addapartement.value;
      console.log('Nouvel appartement :', newApartment);
  } }
  onAdd() {
    if (this.addapartement.valid) {
      const newApart = this.addapartement.value;

      console.log(newApart);
    }
  }
  onReset() {
    this.addapartement.reset({
      terrace: 'yes',
      category: 'S+1'
    });
  }

  
}
