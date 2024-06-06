import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
import { endpoints } from '../utils/endpoints';
import { Carrera } from '../interfaces/carrera.interface';


@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  private readonly http = inject(HttpClient); 
 
  constructor() { } 
  
  obtenerCarreras() { 
    return this.http.get<Carrera[]>(endpoints.obtenerCarreras); 
  } 
  
  obtenerCarreraPorID(idCarrera: number){ 
    return this.http.get<Carrera>(endpoints.obtenerCarreraPorID.replace(':idCarrera', idCarrera.toString())); 
  } 
  
  agregarCarrera(carrera: Carrera){ 
    // Se arma el objeto a enviar 
    let body = { 
        "id": carrera.id, 
        "codigo": carrera.codigo, 
        "nombre": carrera.nombre
    } 
    return this.http.post<any>(endpoints.agregarCarrera,body); 
  } 
  
  eliminarCarrera(id: number){ 
    return this.http.delete<any>(endpoints.eliminarCarrera.replace(':idCarrera',id.toString()));
  }
  
  actualizarCarrera(id: number, carrera: Carrera){ 
      // Se arma el objeto a enviar 
      let body = { 
          "id": carrera.id, 
          "codigo": carrera.codigo, 
          "nombre": carrera.nombre
      } 
      return this.http.put<number>(endpoints.actualizarCarrera.replace(':idCarrera',id.toString()), body); 
  }
=======
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
@Injectable({
providedIn: 'root'
})
export class CarrerasService {
private readonly http = inject(HttpClient);
constructor() { }
obtenerCarreras(): Observable<any>{
return this.http.get(endpoints.obtenerCarreras);
}
>>>>>>> 93cd1803990674682260727c90bf4bcb973ca5ab
}
