import { Component, OnInit, ViewChild } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ProduitService } from 'src/app/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  produits : Produit[] = [];
  user:Produit;
  listData = new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['nomproduit', 'nomcoproduit','prixbproduit','prixventeproduit','seuilremiseproduit','uniteproduit', 'imageproduit', 'quantiteinitialstock','quantiteactuelstock','actions'];

  constructor(private produitservice:ProduitService ,private router: Router) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {

    this.fetchElements();
  }

  fetchElements() {
    this.produitservice.findAll().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
        this.listData.paginator = this.paginator;
      }
    )
  };
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  update(row){

    this.produitservice.populateform(row);
    this.router.navigateByUrl("/home/produit/ajouter");
   
 
   }

   delete(id){
    if(confirm('sur de vouloir supprimer le produit!')){
    this.produitservice.delete(id).subscribe(()=>{
      this.fetchElements();
      console.log("supression!!");
    })
  }

}
}
