import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ApartmentsComponentComponent } from './Appartement/apartments-component/apartments-component.component';
import { ApartmentsByResidenceComponentComponent } from './Appartement/apartments-by-residence-component/apartments-by-residence-component.component';
import { AddApartmentComponentComponent } from './Appartement/add-apartment-component/add-apartment-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponent,
    NotFoundComponentComponent,
    ApartmentsComponentComponent,
    ApartmentsByResidenceComponentComponent,
    AddApartmentComponentComponent,
    NavBarComponent,
    ResidencesComponentComponent,
    ResidenceDetailsComponentComponent,
    AddResidenceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
