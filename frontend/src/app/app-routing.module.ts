import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './home/task/task.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //Vista del formulario
  { path: 'tasks', component: TaskComponent }, //Vista de la tabla de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
