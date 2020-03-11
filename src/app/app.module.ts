import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import {FournisseurComponent} from './fourni/fournisseur/fournisseur.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material/material.module';
import { ListclientComponent } from './client/listclient/listclient.component';
import { AjoutclientComponent } from './client/ajoutclient/ajoutclient.component';
import { ClientService } from './client-service.service';
import { ListfournisseurComponent } from './fourni/listfournisseur/listfournisseur.component';
import { AjoutproduitComponent } from './produit/ajoutproduit/ajoutproduit.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent,
    FournisseurComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ListclientComponent,
    AjoutclientComponent,
    ListfournisseurComponent,
    AjoutproduitComponent,
    ListproduitComponent,
    LoginComponent,
    RegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
