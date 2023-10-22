import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TareaComponent } from './home/tarea/tarea.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //Vista del formulario
  { path: 'tareas', component: TareaComponent }, //Vista de la tabla de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
