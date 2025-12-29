import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserEdit } from './user-edit/user-edit';
import { UserDelete } from './user-delete/user-delete';

const routes: Routes = [
  { path: '', component: UserList },
  { path: 'users', component: UserList },
  { path: 'user/new', component: UserEdit },
  { path: 'user/:id/edit', component: UserEdit },
  { path: 'user/:id/delete', component: UserDelete }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
