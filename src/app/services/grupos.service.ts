import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { endpoints } from '../utils/endpoints';
import { Grupo } from '../interfaces/grupo.interface';
=======
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';

>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab

@Injectable({
  providedIn: 'root'
})
export class GruposService {

<<<<<<< HEAD
  private readonly http = inject(HttpClient); 
 
  constructor() { } 

  obtenerGrupos() { 
    return this.http.get<Grupo[]>(endpoints.obtenerGrupos); 
  } 
  
  obtenerGruposPorID(idGrupo: number){ 
    return this.http.get<Grupo>(endpoints.obtenerGrupoPorID.replace(':idGrupo', idGrupo.toString())); 
  } 
  
  agregarGrupo(grupo: Grupo){ 
    // Se arma el objeto a enviar 
    let body = { 
        "idCarrera": grupo.idCarrera,
        "idMateria": grupo.idMateria,
        "idProfesor": grupo.idProfesor,
        "ciclo": grupo.ciclo,
        "anio": grupo.anio
    } 
    return this.http.post<any>(endpoints.agregarGrupo,body); 
  } 
  
  eliminarGrupo(idGrupo: number){ 
    return this.http.delete<any>(endpoints.eliminarGrupo.replace(':idGrupo',idGrupo.toString()));
  }
  
  actualizarGrupo(idGrupo: number, grupo: Grupo){ 
      // Se arma el objeto a enviar 
      let body = { 
        "idGrupo": grupo.idGrupo,
        "idCarrera": grupo.idCarrera,
        "idMateria": grupo.idMateria,
        "idProfesor": grupo.idProfesor,
        "ciclo": grupo.ciclo,
        "anio": grupo.anio
      } 
      return this.http.put<number>(endpoints.actualizarGrupo.replace(':idGrupo',idGrupo.toString()), body); 
=======
  private readonly http = inject(HttpClient);
  constructor() { }

  obtenerGrupos(): Observable<any> {
    return this.http.get(endpoints.obtenerGrupos);
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
  }
}
