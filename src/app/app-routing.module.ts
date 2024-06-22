import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { authguardGuard } from './core/guard/authguard.guard';
import { loginGuard } from './core/guard/login.guard';

const routes: Routes = [
  {
    path:"",
    component:HorizontalComponent,
    loadChildren: ()=>import("./pages/pages.module").then((m)=>m.PagesModule),
    canActivate:[authguardGuard]
  },
  {
    path:"auth",
    component:AuthLayoutComponent,
    loadChildren:()=> import("./authentication/authentication.module").then((m)=>m.AuthenticationModule),
    canActivate:[loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
