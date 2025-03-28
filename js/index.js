/**
 * 6. ESTUDIANTE-A
 * El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
 * Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
 * Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca.
 * Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un estudiante y reporte el monto de la beca, o si no le corresponde beca.
 * Ejemplos de la corrida:
 * salida:
 * 
 * Nombre del estudiante: Mary
 * Acumulado de notas: 132
 * Cantidad de materias: 8
 * Nota promedio: 16.50
 * Mary recibe una beca de $30.00
 * 
 * Nombre del estudiante: Alirio
 * Acumulado de notas: 315
 * Cantidad de materias: 35
 * Nota promedio: 9.00
 * Alirio no le corresponde beca
 * 
 */

import Cl_becado from "./Cl_becado.js";
let estudiante1 = new Cl_becado( "Mary", 132, 8);
let estudiante2 = new Cl_becado( "Alirio", 315, 35);

let salida = document.getElementById("salida");
//salida:
salida.innerHTML = `Nombre del estudiante: ${estudiante1._nombre}
Acumulado de notas: ${estudiante1._acumNotas}<br>
Cantidad de materias: ${estudiante1._cantMaterias}<br>
Nota promedio: ${estudiante1.promedioNota()}<br>
${estudiante1.tieneBeca()}
  </br></br>
Nombre del estudiante: ${estudiante2._nombre}<br>
Acumulado de notas: ${estudiante2._acumNotas}<br>
Cantidad de materias: ${estudiante2._cantMaterias}<br>
Nota promedio: ${estudiante2.promedioNota()}<br>
${estudiante2.tieneBeca()}
`;
