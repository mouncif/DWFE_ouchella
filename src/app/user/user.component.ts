import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../model/user';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  clients: user[] = [];
  user: user;
  listData = new MatTableDataSource<user>();
  displayedColumns: string[] = ['id','email', 'motdpass'];



  constructor(private service:UserService, private router: Router) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this.fetchElements();

  }

  fetchElements() {
    this.service.findAll().subscribe(
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

}
