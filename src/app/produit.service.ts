import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produit } from './model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url="http://localhost:3000/Produit";

  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nomproduit: new FormControl('', Validators.required),
    nomcoproduit: new FormControl('', Validators.required),
    prixbproduit: new FormControl('', Validators.required),
    prixventeproduit: new FormControl('', [Validators.required, Validators.minLength(8)]),
    seuilremiseproduit: new FormControl('', Validators.email),
    uniteproduit: new FormControl('', Validators.required),
    imageproduit:new FormControl('',Validators.required),
    quantiteinitialstock: new FormControl('', Validators.required),
    quantiteactuelstock: new FormControl('', Validators.required)

 
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomproduit:'',
      nomcoproduit: '',
      prixbproduit: '',
      prixventeproduit:'',
      seuilremiseproduit: '',
      uniteproduit: '',
      imageproduit: '',
      quantiteinitialstock: '',
      quantiteactuelstock:'',
    
    });
  }
  findAll() {
    return this.http.get<Produit[]>(this.url);
  }

  add(cli) {
    return this.http.post<Produit>(this.url, cli);
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
    return this.http.get<Produit>(this.url);
  }

}
