import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent {
  // residence: any;
  // residences = [
  //   { id: 0, name: 'Résidence A', details: 'Détails sur Résidence A' },
  //   { id: 1, name: 'Résidence B', details: 'Détails sur Résidence B' },
  //   { id: 2, name: 'Résidence C', details: 'Détails sur Résidence C' }
  // ];
  // router: any;
  // route: any;

  // ngOnInit(): void {
  //   this.loadResidence();
  // }

  // loadResidence(): void {
  //   const id = +this.route.snapshot.paramMap.get('id')!; 
  //   this.residence = this.residences.find(r => r.id === id); 
  // }

  // nextResidence(): void {
  //   const currentId = +this.route.snapshot.paramMap.get('id')!;
  //   const nextId = (currentId + 1) % this.residences.length; 
  //   this.router.navigate(['/residence-details', nextId]).then(() => {
  //     this.loadResidence();
  //   });
  // }
  
 
}

