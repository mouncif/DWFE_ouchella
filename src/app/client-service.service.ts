import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Client} from './model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url =  " http://localhost:3000/Client";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomclient: new FormControl('', Validators.required),
    prenomclient: new FormControl('', Validators.required),
    statutclient: new FormControl('', Validators.required),
    telclient: new FormControl('', [Validators.required, Validators.minLength(8)]),
    emailclient: new FormControl('', Validators.email),
    adresseclient: new FormControl('', Validators.required),
    photoclient:new FormControl('',Validators.required),
    villeclient: new FormControl('', Validators.required),
 
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomclient: '',
      prenomclient: '',
      statutclient: '',
      photoclient:'',
      telclient: '',
      emailclient: '',
      adresseclient: '',
      villeclient: '',
    
    });
  }


  findAll() {
    return this.http.get<Client[]>(this.url);
  }
  add(cli) {
    return this.http.post<Client>(this.url, cli);
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
    return this.http.get<Client>(this.url);
  }
}