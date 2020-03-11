import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/model/client';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client-service.service';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})

export class ListclientComponent implements OnInit {
  clients: Client[] = [];
  user: Client;
  listData = new MatTableDataSource<Client>();
  displayedColumns: string[] = ['nomclient', 'prenomclient', 'statutclient', 'telclient', 'emailclient', 'adresseclient', 'villeclient', 'actions'];
  constructor(private clientService: ClientService, private router: Router
    )
     { }

   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.fetchElements();

  }

  fetchElements() {
    this.clientService.findAll().subscribe(
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

   this.clientService.populateform(row);
   this.router.navigateByUrl("/home/client/ajouter");
  

  }
  delete(id){
    if(confirm('est ce  que  vous étes sur!')){
    this.clientService.delete(id).subscribe(()=>{
      this.fetchElements();
      console.log("supression!!");
    })
  }

  }
  
}

