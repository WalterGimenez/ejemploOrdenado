import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { ListComponent } from './persona/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'listar', component: ListComponent, pathMatch: 'full'},
  {path: 'editar', component: EditComponent, pathMatch: 'full'},
  {path: 'agregar', component: AddComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
