import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrerasService } from './services/carreras.service';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet],
templateUrl: './app.component.html',
styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'GestionAcademica';

// Haciendo inyeccion de dependencia
private readonly carrerasServices = inject(CarrerasService);
// Creando observable
carrera$ = this.carrerasServices.obtenerCarreras();
}
