import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/user"

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    email: new FormControl('', Validators.email),
    motdpass: new FormControl(''),
    //confirmIdentifiant: new FormControl(''),
    //oldidentifiant: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      email: '',
      motdpass:'',
      //confirmIdentifiant: '',
      //oldidentifiant: '',
    });
  }

  findAll() {
    return this.http.get<user[]>(this.url);
  }
  add(user) {
    return this.http.post<user>(this.url,user);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user) {
    return this.http.put(`${this.url}/${user.id}`,user);
  }

  populateform(row) {
    this.form.setValue(row);
  }
  getAll() {
    return this.http.get<user>(this.url);
  }

  findUser(id){
    return this.http.get<user>(`${this.url}/${id}`);
  }
}
