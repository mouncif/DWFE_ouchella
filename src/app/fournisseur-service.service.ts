import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fournisseur } from './model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
  private url="http://localhost:3000/Fournisseur";

  constructor( private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomfournisseur: new FormControl('', Validators.required),
    nomcourtfournisseur: new FormControl('', Validators.required),
    villefournisseur: new FormControl('', Validators.required),
    Adressefournisseur: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Telfournisseur: new FormControl('', Validators.email),
    Telmobilefournisseur: new FormControl('', Validators.required),
    Faxfournisseur:new FormControl('',Validators.required),
    emailfournisseur: new FormControl('', Validators.required),
 
  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      nomfournisseur:'',
      nomcourtfournisseur:'',
       villefournisseur:'',
        Adressefournisseur:'',
         Telfournisseur:'',
          Telmobilefournisseur:'', 
          Faxfournisseur:'', 
          emailfournisseur:'',
    
    });
  }

  findAll() {
    return this.http.get<Fournisseur[]>(this.url);
  }

  add(four) {
    return this.http.post<Fournisseur>(this.url,four);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }
  populateform(row) {
    this.form.setValue(row);
  }

  getAll() {
    return this.http.get<Fournisseur>(this.url);
  }



}
