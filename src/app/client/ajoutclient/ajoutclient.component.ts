import { Component, OnInit } from '@angular/core';
import {Client}  from '../../model/client';
import {ClientService}  from '../../client-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {
  private client:Client={
    nomclient:'',
    prenomclient:'',
    statutclient:'',
    photoclient:'',
     telclient:'',
      emailclient:'',
    adresseclient:'',
    villeclient:'',

  }

  constructor(private service:ClientService,private router:Router) { }

  ngOnInit() {
  }

  ajoutClient(){
    
    this.client=this.service.form.value;
    if(this.client.id==undefined){

      this.service.add(this.client).subscribe((cl)=>{
        console.log("ajoutsucces");
        this.router.navigateByUrl("/home/client/list");
        this.clear();
      });
    }else{
      this.service.update(this.client).subscribe((cl)=>{
        this.router.navigateByUrl("/home/client/list");
        this.clear();
        
      });
      
    }
    
   




  }
  clear(){
    this.service.initializeFormGroup();
  }

}
