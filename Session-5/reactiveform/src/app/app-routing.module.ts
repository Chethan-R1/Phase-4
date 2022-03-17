import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {"path":"register",component:RegisterComponent},
  {"path":"switch",component:SwitchdemoComponent},
  {"path":"pipes",component:PipesComponent},
  {"path":"list",component:ProductlistComponent}
];
from Sonam (Trainer) to All Participants:
<h1>Welcome to routing Example</h1>
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link" routerLink="register">Register</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="switch">StructuralDirective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="pipes">Pipes Demo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="list">List</a>
    </li>
</ul>
<router-outlet></router-outlet>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
