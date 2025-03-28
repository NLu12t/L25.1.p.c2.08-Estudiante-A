export default class Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias){
        this._nombre = nombre;
        this._acumNotas = acumNotas;
        this._cantMaterias = cantMaterias
    }
    promedioNota(){
        return this._acumNotas / this._cantMaterias;
    }
    tieneBeca(){
    if(this.promedioNota() < 10) return ` ${this._nombre} No le corresponde beca.`;
      else if(this.promedioNota() >= 10) return `${this._nombre} Recibe una beca de ${this.becaMensual()}$`;
    }
}