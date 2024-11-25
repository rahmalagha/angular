import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-residence-component',
  templateUrl: './add-residence-component.component.html',
  styleUrls: ['./add-residence-component.component.css']
})
export class AddResidenceComponentComponent {
  isUpdating: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.isUpdating = true;  
      }
    });
 


  }
}
