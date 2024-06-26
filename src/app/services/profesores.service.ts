import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { endpoints } from '../utils/endpoints';
import { Profesor } from '../interfaces/profesor.interface';
=======
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
<<<<<<< HEAD

  private readonly http = inject(HttpClient);
  constructor() { }
  
  obtenerProfesores(){
    return this.http.get<Profesor[]>(endpoints.obtenerProfesores);
  }
  // Obtener estudiante por ID 
obtenerProfesorPorID(idProfesor: number){ 
  return this.http.get<Profesor>(endpoints.obtenerProfesorPorID.replace(':idProfesor', idProfesor.toString())); 
} 
// Insertar estudiante 
agregarProfesor(profesor: Profesor){ 
  // Se arma el objeto a enviar 
  let body = { 
      "nombresProfesor": profesor.nombresProfesor, 
      "apellidosProfesor": profesor.apellidosProfesor, 
      "email": profesor.email 
  } 
  return this.http.post<any>(endpoints.agregarProfesor,body); 
} 
// Eliminar un estudiante 
eliminarProfesor(idProfesor: number){ 
  return this.http.delete<any>(endpoints.eliminarProfesor.replace(':idProfesor',idProfesor.toString()));
}
// Actualizar estudiante 
actualizarProfesor(idProfesor: number, profesor: Profesor){ 
    // Se arma el objeto a enviar 
    let body = { 
        "idProfesor": profesor.idProfesor, 
        "nombresProfesor": profesor.nombresProfesor, 
        "apellidosProfesor": profesor.apellidosProfesor, 
        "email": profesor.email 
    } 
    return this.http.put<number>(endpoints.actualizarProfesor.replace(':idProfesor',idProfesor.toString()), body); 
}
=======
  private readonly http = inject(HttpClient);
  constructor() { }
  obtenerProfesores(): Observable<any> {
    return this.http.get(endpoints.obtenerProfesores);
  }
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
}
