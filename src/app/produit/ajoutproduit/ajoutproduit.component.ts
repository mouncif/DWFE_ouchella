import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
  private produit:Produit={
    nomproduit: '',
    nomcoproduit: '',
    prixbproduit:null,
    prixventeproduit: null,
    seuilremiseproduit:null,
    uniteproduit:null,
    imageproduit: '',
    quantiteinitialstock:'',
    quantiteactuelstock: '',

  }


  constructor( private produitService:ProduitService,
    private router: Router
    ) { }

  ngOnInit() {
  }



  ajoutProduit(){
    console.log('reached');
    this.produit=this.produitService.form.value;
    console.log(this.produit);
    if(this.produit.id==undefined){

      this.produitService.add(this.produit).subscribe((cl)=>{
        console.log("ajoutsucces");
        this.router.navigateByUrl("/home/produit/list");
        this.clear();
      });
    }else{
      this.produitService.update(this.produit).subscribe((cl)=>{
        this.router.navigateByUrl("/home/produit/ajouter");
        this.clear();
        
      });
      
    }
    
   




  }
  clear(){
    this.produitService.initializeFormGroup();
  }

}
