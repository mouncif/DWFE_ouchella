import { Component, OnInit, ViewChild } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FournisseurServiceService } from 'src/app/fournisseur-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  user: Fournisseur;
  listData = new MatTableDataSource<Fournisseur>();
  displayedColumns: string[] = ['nomfournisseur', 'nomcourtfournisseur', 'villefournisseur', 'Adressefournisseur', 'Telfournisseur', 'Telmobilefournisseur', 'Faxfournisseur','emailfournisseur','actions'];

  constructor(private fournisseurService:FournisseurServiceService, private router: Router) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this.fetchElements();
    
  }

  fetchElements() {
    this.fournisseurService.findAll().subscribe(
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

    this.fournisseurService.populateform(row);
    this.router.navigateByUrl("/home/fournisseur/ajouterr");
   
 
   }

   delete(id){
    if(confirm(' sur de vouloir supprimer ce fournisseur!')){
    this.fournisseurService.delete(id).subscribe(()=>{
      this.fetchElements();
      console.log("supression!!");
    })
  }


}
}
