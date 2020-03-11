import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: user[] = [];
  private user: user = {
    email: '',
    motdpass: ''
  };

  constructor(private service: UserService,private router: Router) { }

  ngOnInit() {
  }
  onsubmit(){
    this.user=this.service.form.value;
    //if (this.service.form.valid) {
      this.service.getAll().subscribe((data: any)=>{
        this.users=data;
        console.log(this.users);
        for(var val of data){
          if(val['email']==this.user.email && val['motdpass']==this.user.motdpass ){
            console.log('exist!!')
            this.router.navigateByUrl('/home');
          }else{
            console.log('not exist !')
          }

        }
        
      })

    

  }

}
