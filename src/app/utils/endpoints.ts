import { environment } from "../../environments/environment.development";
export const endpoints = {
// *** Estudiantes ***
agregarEstudiante:
environment.serverURL.concat('api/estudiantes/agregarEstudiante'),
actualizarEstudiante:
environment.serverURL.concat('api/estudiantes/actualizarEstudiante/:idEstudiante'),
eliminarEstudiante:
environment.serverURL.concat('api/estudiantes/eliminarEstudiante/:idEstudiante'),
obtenerEstudiantePorID:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantesPorID/:idEstudiante'),
obtenerEstudiantes:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantes'),
// ***Carreras
agregarCarrera:
environment.serverURL.concat('api/carreras/agregarCarrera'),
actualizarCarrera:
environment.serverURL.concat('api/carreras/actualizarCarrera/:idCarrera'),
eliminarCarrera:
environment.serverURL.concat('api/carreras/eliminarCarrera/:idCarrera'),
obtenerCarreraPorID:
environment.serverURL.concat('api/carreras/obtenerCarrerasPorID/:idCarrera'),
obtenerCarreras:
environment.serverURL.concat('api/carreras/consultarCarreras'),
// ***Grupos
agregarGrupo:
environment.serverURL.concat('api/grupos/agregarGrupo'),
actualizarGrupo:
environment.serverURL.concat('api/grupos/actualizarGrupo/:idGrupo'),
eliminarGrupo:
environment.serverURL.concat('api/grupos/eliminarGrupo/:idGrupo'),
obtenerGrupoPorID:
environment.serverURL.concat('api/grupos/consultareGruposPorID/:idGrupo'),
obtenerGrupos:
environment.serverURL.concat('api/grupos/consultarGrupos'),
// ***Materias
agregarMateria:
environment.serverURL.concat('api/materias/agregarMateria'),
actualizarMateria:
environment.serverURL.concat('api/materias/actualizarMateria/:idMateria'),
eliminarMateria:
environment.serverURL.concat('api/materias/eliminarMateria/:idMateria'),
obtenerMateriaPorID:
environment.serverURL.concat('api/materias/consultarMateriaPorID/:idMateria'),
obtenerMaterias:
environment.serverURL.concat('api/materias/obtenerTodasLasMaterias'),
// ***Profesor
agregarProfesor:
environment.serverURL.concat('api/profesores/agregarProfesor'),
actualizarProfesor:
environment.serverURL.concat('api/profesores/actualizarProfesor/:idProfesor'),
eliminarProfesor:
environment.serverURL.concat('api/profesores/eliminarProfesor/:idProfesor'),
obtenerProfesorPorID:
environment.serverURL.concat('api/profesores/obtenerProfesorPorID/:idProfesor'),
obtenerProfesores:
environment.serverURL.concat('api/profesores/obtenerProfesores')
};
