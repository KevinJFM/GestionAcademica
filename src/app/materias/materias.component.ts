import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Materia } from '../interfaces/materia.interface';
import { MateriasService } from '../services/materias.service';
@Component({
  selector: 'app-Materias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Materias.component.html',
  styleUrl: './Materias.component.scss',
})
export class MateriasComponent {
  // Haciendo inyeccion de dependencia
  private readonly MateriasService = inject(MateriasService);
  public lstMaterias: Materia[];
  constructor() {
    this.lstMaterias = [];
    this.getAllStudents();
  }
  getAllStudents() {
    this.MateriasService.obtenerMaterias().subscribe({
      // Se evalua que la respuesta del endpoint sea exitosa
      next: (temp) => {
        // Se asigna la lista al arreglo anteriormente descrito
        this.lstMaterias = temp;
      },
      // En caso de error
      error: (err) => {
        console.log('No se pudo obtener informacion');
      },
    });
  }
}
