import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service'; 

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule],
templateUrl: './app.component.html',
styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'GestionAcademica';
// Haciendo inyeccion de dependencia
private readonly estudiantesServices = inject(EstudiantesService);
// Creando observable
estudiantes$ = this.estudiantesServices.obtenerEstudiantes();
}

