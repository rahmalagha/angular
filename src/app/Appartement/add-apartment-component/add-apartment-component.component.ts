import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment-component',
  templateUrl: './add-apartment-component.component.html',
  styleUrls: ['./add-apartment-component.component.css']
})
export class AddApartmentComponentComponent {
  addapartement:FormGroup;
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
  
}
