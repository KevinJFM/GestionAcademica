import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante.interface';
import { endpoints } from '../utils/endpoints';
@Injectable({
providedIn: 'root'
})
export class EstudiantesService {
private readonly http = inject(HttpClient);
constructor() { }
obtenerEstudiantes() {
return this.http.get<Estudiante[]>(endpoints.obtenerEstudiantes);
}
}

