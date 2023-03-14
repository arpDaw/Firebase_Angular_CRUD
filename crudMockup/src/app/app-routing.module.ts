import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/access/components/login/login.component';
import { MainComponent } from './features/access/components/main/main.component';
import { RegisterComponent } from './features/access/components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  // { path: 'main',
  //   component: MainComponent,
  //   ...canActivate(()=>redirectUnauthorizedTo(['/login'])) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main',
   loadChildren: () => import('./features/companies/company/company.module').then(m => m.CompanyModule),
   ...canActivate(()=>redirectUnauthorizedTo(['/login'])) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
