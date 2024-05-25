import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Profesor } from '../interfaces/profesores.interface';
import { ProfesoresService } from '../services/profesores.service';
@Component({
selector: 'app-Profesors',
standalone: true,
imports: [CommonModule],
templateUrl: './profesor.component.html',
styleUrl: './Profesor.component.scss'
})
export class ProfesorsComponent {
// Haciendo inyeccion de dependencia
private readonly profesoresService = inject(ProfesoresService);
public lstProfesores: Profesor[];
constructor(){
this.lstProfesores = [];
this.getAllStudents();
}
getAllStudents(){
this.profesoresService.obtenerProfesores().subscribe({
// Se evalua que la respuesta del endpoint sea exitosa
next: (temp) => {
// Se asigna la lista al arreglo anteriormente descrito
this.lstProfesores = temp;
},
// En caso de error
error: (err) => {
console.log("No se pudo obtener informacion");
}
})
}
}
