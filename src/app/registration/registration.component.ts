import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  private user: user = {
    id:null,
    email: '',
    motdpass: '',

  };

  constructor(private service: UserService, private router: Router) { }


  ngOnInit() {
    this.onClear();
  }
  

  
  onSubmit() {
    console.log('reached');
    if (this.service.form.valid) {
      this.user = this.service.form.value;
      console.log(this.user);
       {
        this.service.add(this.user).subscribe((user) => {
          console.log('Enregistrer avec succes');
          this.onClear();
          this.router.navigateByUrl('/login');
        });
      }
    } else {
      console.log("something went wrong");
    }

  }

  onClear() {
    console.log('initialiser');
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
