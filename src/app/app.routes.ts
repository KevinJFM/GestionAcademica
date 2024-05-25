import { Routes } from '@angular/router';
import { CarrerasComponent } from './carrera/carrera.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GrupossComponent } from './grupos/grupos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesorsComponent } from './profesor/profesor.component';

export const routes: Routes = [
  {path: 'Estudiantes', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta por defecto
  {path: 'Materias', component: MateriasComponent, pathMatch: 'full'}, // Ruta por defecto
  {path: 'Carreras', component: CarrerasComponent, pathMatch: 'full'},
  {path: 'Profesores', component: ProfesorsComponent, pathMatch: 'full'},
  {path: 'Grupos', component: GrupossComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'} // Rutas no existentes
];
