import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
{path: '/loginAdmin', component: LoginComponent},
{path: '/registerAdmin', component:RegistrarComponent},
/*{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}
{path: '', component:}

*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
