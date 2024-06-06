<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { MateriasService } from '../services/materias.service';
import { CommonModule } from '@angular/common';
import { Materia } from '../interfaces/materia.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { parsearErroresAPI } from '../utils/Utilities';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.scss'
})
export class MateriasComponent implements OnInit{
  // Haciendo inyeccion de dependencia
  private readonly maateriasService = inject(MateriasService);
  private readonly router = inject(Router);
  public lstMaterias: Materia[];

  constructor(){
    this.lstMaterias = [];
  }
  
  ngOnInit(): void {
    this.getAllSubjects();
  }
  getAllSubjects(){
    this.maateriasService.obtenerMaterias().subscribe({
      // Se evalua que la respuesta del endpoint sea exitosa
      next: (temp) => {
      // Se asigna la lista al arreglo anteriormente descrito
      this.lstMaterias = temp;
      },
      // En caso de error
      error: (err) => {
        console.log("No se pudo obtener informacion");
      }
    })
  }
navigateToForm(){ 
this.router.navigate(['/agregarMateria']); 
} 

deleteMateria(event: any){ 
Swal.fire({ 
  title: "¿Quiere eliminar este registro?", 
  text: "Esta acción no se puede revertir", 
  icon: "warning", 
  showCancelButton: true, 
  confirmButtonColor: "#3085d6", 
  cancelButtonColor: "#d33", 
  confirmButtonText: "Sí, eliminar", 
  cancelButtonText: "Cancelar", 
  showLoaderOnConfirm: true 
}).then((result) => { 
  if (result.isConfirmed){ 
    this.maateriasService.eliminarMateria(event.target.value).subscribe({ 
      // En caso exitoso 
      next: (temp) => { 
        Swal.fire("Eliminado","Registro eliminado con exito","success"); 
        
        this.getAllSubjects(); 
      }, 
      // En caso erroneo 
      error: (err) => { 
        Swal.fire({ 
          icon: 'error', 
          title: 'Error al eliminar', 
          text: parsearErroresAPI(err).toString() 
        }); 
      } 
    }); 
  } 
}); 
} 

updateMateria(valor: number){  
  if(valor){ 
    this.router.navigate(['/agregarMateria', valor]); 
  } 
} 
=======
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
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
}
