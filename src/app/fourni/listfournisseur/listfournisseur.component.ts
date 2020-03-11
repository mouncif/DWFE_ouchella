import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurServiceService } from 'src/app/fournisseur-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css']
})
export class ListfournisseurComponent implements OnInit {
  private fournisseur:Fournisseur={
    nomfournisseur: '',
    nomcourtfournisseur:'',
     villefournisseur:'',
      Adressefournisseur:'',
       Telfournisseur:'',
        Telmobilefournisseur:'',
        Faxfournisseur:'', 
        emailfournisseur:'',

  }
  constructor(private service:FournisseurServiceService,private router:Router) { }

  ngOnInit() {
  }


  ajoutFournisseur(){
    
    this.fournisseur=this.service.form.value;
    if(this.fournisseur.id==undefined){

      this.service.add(this.fournisseur).subscribe((cl)=>{
        console.log("ajoutsucces");
        this.router.navigateByUrl("/home/fourni/ajouterr");
        this.clear();
      });
    }else{
      this.service.update(this.fournisseur).subscribe((cl)=>{
        this.router.navigateByUrl("/home/fourni/listt");
        this.clear();
        
      });
      
    }
  }
  clear(){
    this.service.initializeFormGroup();
  }

}
