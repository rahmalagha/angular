import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  residenceUrl ='http://localhost:3000/residences';

  getResidences() {
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  deleteResidence(id: number) {
    return this.http.delete<void>(`${this.residenceUrl}/${id}`);
  }

  addResidence(residence: any){
    return this.http.post(this.residenceUrl, residence);
  }

  updateResidence(id: number, residence: any) {
    return this.http.put(`${this.residenceUrl}/${id}`, residence);
  }

  getResidenceById(id: number) {
    return this.http.get(`${this.residenceUrl}/${id}`);
  }


  
}
