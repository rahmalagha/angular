import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

    visibility=false ;
    ShowLocation (residence : Residence) {
    if(residence.address=== 'inconnu'){
      alert('adresse inconnu')
    }
    
    else{
      this.visibility=true ;
      
      
    }
  }

  residence: any;
  residences: any[] = [
    { name: 'Résidence A', details: 'Détails de la Résidence A' },
    { name: 'Résidence B', details: 'Détails de la Résidence B' },
    { name: 'Résidence C', details: 'Détails de la Résidence C' }
  ];

  constructor(private router: Router) {}

  goToDetails(id: number): void {
    this.router.navigate(['/residence-details', id]); // Navigation avec ID
  }

}
