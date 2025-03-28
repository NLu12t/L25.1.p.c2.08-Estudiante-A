import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias, beca){
        super(nombre, acumNotas, cantMaterias, beca);
        this.beca = +beca;
    }
    
    becaMensual(){
        if(this.promedioNota() < 10) return 0;
          else if(this.promedioNota() >= 10) return 20;
        else if( this.promedioNota() > 15) return 30;
    }
}