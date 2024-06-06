import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { endpoints } from '../utils/endpoints';
import { Materia } from '../interfaces/materia.interface';
=======
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private readonly http = inject(HttpClient);
  constructor() { }
<<<<<<< HEAD

  obtenerMaterias(){
    return this.http.get<Materia[]>(endpoints.obtenerMaterias);
  }
  obtenerMateriaPorID(idGrupo: number){ 
    return this.http.get<Materia>(endpoints.obtenerMateriaPorID.replace(':idMateria', idGrupo.toString())); 
  } 
  
  agregarMateria(materia: Materia){ 
    // Se arma el objeto a enviar 
    let body = { 
        "nombreMateria": materia.nombreMateria
    } 
    return this.http.post<any>(endpoints.agregarMateria,body); 
  } 
  
  eliminarMateria(idMateria: number){ 
    return this.http.delete<any>(endpoints.eliminarMateria.replace(':idMateria',idMateria.toString()));
  }
  
  actualizarMateria(idMateria: number, materia: Materia){ 
      // Se arma el objeto a enviar 
      let body = { 
        "idMateria": materia.idMateria,
        "nombreMateria": materia.nombreMateria
      } 
      return this.http.put<number>(endpoints.actualizarMateria.replace(':idMateria',idMateria.toString()), body); 
=======
  obtenerMaterias(): Observable<any> {
    return this.http.get(endpoints.obtenerMaterias);
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
  }
}
