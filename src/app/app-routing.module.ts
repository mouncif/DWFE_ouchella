import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ListclientComponent } from './client/listclient/listclient.component';
import { AjoutclientComponent } from './client/ajoutclient/ajoutclient.component';
import { FournisseurComponent } from './fourni/fournisseur/fournisseur.component';
import { ListfournisseurComponent } from './fourni/listfournisseur/listfournisseur.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';
import { AjoutproduitComponent } from './produit/ajoutproduit/ajoutproduit.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '', component:LoginComponent
    //canActivate: [Authgard]
    
  },{
      path:'home',component:HomeComponent,children: [
          {
              path:'',component:ClientComponent
          },
          {
              path:'client',component:ClientComponent,children:[
                  {
                      path:'',component:ListclientComponent
                      
                  },
                  {
                      path:'ajouter',component:AjoutclientComponent
                  },
                  {
                      path:'list',component:ListclientComponent
                  }
              ]
          },
          {
              path:'user',component:UserComponent,children:[
                  {
                      path:'',component:UserComponent
                  },
                  {
                      path:'list',component:UserComponent
                  }
              ]
          },

          

          {  
              
            path:'fourni',component:FournisseurComponent,children:[
            {
                path:'',component:ListfournisseurComponent
                
            },

            {

                path:'ajouterr',component:ListfournisseurComponent



            },
            {
                path:'listt',component:FournisseurComponent
            }
 ] },
          {
            path:'produit',component:ClientComponent,children:[
                {
                    path:'',component:ListproduitComponent},
                {
                    path:'ajouter',component:AjoutproduitComponent},
                {
                    path:'list',component:ListproduitComponent
                }]}]},
                {
                    path:'registre',component:RegistrationComponent,children:[
                        {
                            path:'',component:RegistrationComponent
                        }
      
                    ]
                },
                {
                    path:'login',component:LoginComponent
                }
  
    
 
  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }