import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// Var1='bonjour1'
// List=['4se1','twin3']
// var2='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
// var3='rahma'
// function1 (){
//   alert('hi');
// }

residences: any[] = [
  { name: 'Résidence A' },
  { name: 'Résidence B' },
  { name: 'Résidence C' }
];

constructor() { }
ngOnInit(): void {
  
}


}
