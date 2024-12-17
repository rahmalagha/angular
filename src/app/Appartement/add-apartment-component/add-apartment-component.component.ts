import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-apartment-component',
  templateUrl: './add-apartment-component.component.html',
  styleUrls: ['./add-apartment-component.component.css']
})
export class AddApartmentComponentComponent {
  addapartement:FormGroup;
  constructor (private fb:FormBuilder){
    this.addapartement=this.fb.group({
      
    })


  }
  
}
