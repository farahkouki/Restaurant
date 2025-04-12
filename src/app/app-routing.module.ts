import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent  }  from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
const routes: Routes = [
{path : 'home', component:HomeComponent},
{path :'addMenu', component:AddMenuComponent},
  {path : '**',component:NotFoundComponent },
  {path : 'update', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
