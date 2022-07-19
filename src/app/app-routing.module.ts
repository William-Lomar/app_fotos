import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './core/erro/erro.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path:'',redirectTo:"home",pathMatch:'full'
  },{
    path:"home",component:HomeComponent
  },{
    path:'**',component:ErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
