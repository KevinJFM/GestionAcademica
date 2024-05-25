import { environment } from "../../environments/environment.development";
export const endpoints = {
// *** Estudiantes ***
agregarEstudiante:
environment.serverURL.concat('api/EstudianteControlador/agregarEstudiante'),
actualizarEstudiante:
environment.serverURL.concat('api/EstudianteControlador/actualizarEstudiante/:idEstudiante'),
eliminarEstudiante:
environment.serverURL.concat('api/EstudianteControlador/eliminarEstudiante/:idEstudiante'),
obtenerEstudiantePorID:
environment.serverURL.concat('api/EstudianteControlador/Estudiantes/:idEstudiante'),
obtenerEstudiantes:
environment.serverURL.concat('api/EstudianteControlador/consultarEstudiantes'),
// ***Carreras
agregarCarrera:
environment.serverURL.concat('api/carreras/agregarCarrera'),
actualizarCarrera:
environment.serverURL.concat('api/carreras/actualizarCarrera/:idCarrera'),
eliminarCarrera:
environment.serverURL.concat('api/carreras/eliminarCarrera/:idCarrera'),
obtenerCarreraPorID:
environment.serverURL.concat('api/carreras/carreras/:idCarrera'),
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
environment.serverURL.concat('api/materias/consultarMaterias'),
// ***Profesor
agregarProfesor:
environment.serverURL.concat('api/profesor/agregarProfesor'),
actualizarProfesor:
environment.serverURL.concat('api/profesor/actualizarProfesor/:idProfesor'),
eliminarProfesor:
environment.serverURL.concat('api/profesor/eliminarProfesor/:idProfesor'),
obtenerProfesorPorID:
environment.serverURL.concat('api/profesor/consultarProfesorPorID/:idProfesor'),
obtenerProfesores:
environment.serverURL.concat('api/profesor/consultarProfesores')
};
