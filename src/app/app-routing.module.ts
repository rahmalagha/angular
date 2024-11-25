import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence-details/:id', component: ResidenceDetailsComponentComponent },
  { path: 'add-residence/:id', component:AddResidenceComponentComponent} ,
  { path: '**', component: NotFoundComponentComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
