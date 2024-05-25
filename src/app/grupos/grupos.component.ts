import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Grupo } from '../interfaces/grupos.interface';
import { GruposService } from '../services/grupos.service';
@Component({
  selector: 'app-Gruposs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Grupos.component.html',
  styleUrl: './Grupos.component.scss',
})
export class GrupossComponent {
  // Haciendo inyeccion de dependencia
  private readonly GrupossService = inject(GruposService);
  public lstGrupos: Grupo[];
  constructor() {
    this.lstGrupos = [];
    this.getAllGroups();
  }
  getAllGroups() {
    this.GrupossService.obtenerGrupos().subscribe({
      // Se evalua que la respuesta del endpoint sea exitosa
      next: (temp) => {
        // Se asigna la lista al arreglo anteriormente descrito
        this.lstGrupos = temp;
      },
      // En caso de error
      error: (err) => {
        console.log('No se pudo obtener informacion');
      },
    });
  }
}
