import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {

  
  ngOnChanges(changes: SimpleChanges): void {
    
    
  }
  
  title = 'Juego del Ahorcado';
  juegoComenzado: boolean = false;
  palabraJugada : string;
  letraJugada:string;
  estadoDelJuego: string;
  nroErrores: number;
  nroAciertos: number;
  nombreJugador: string;
  
  aciertos:Array<string> = new Array<string>();
  errores:Array<string> = new Array<string>();



  jugarLetra($event){

    this.letraJugada=$event;
    if(this.letraJugada && this.palabraJugada.includes(this.letraJugada)){ //si la letra está
       if(!this.aciertos.includes(this.letraJugada)){//si no la ha jugado
        
        let arr:Array<string> = this.estadoDelJuego.split("");
        for (let index = 0; index < arr.length; index++) {
          if(this.palabraJugada[index]==this.letraJugada){
            arr[index]=this.letraJugada;
          }        
        }
        this.estadoDelJuego=arr.join("");

        this.nroAciertos=this.aciertos.push(this.letraJugada);
        
        if(this.estadoDelJuego==this.palabraJugada){//si adempas le achuntó
          this.terminarJuego("Ganaste "+this.nombreJugador+"!");
        }
       }else{ //si ya la jugó
          alert("Ya has jugado esa letra, intenta con otra");

       }
    }else{//si la letra no está en la palabra
      if(!this.errores.includes(this.letraJugada)){ //si no la ha jugado
        
        this.nroErrores=this.errores.push(this.letraJugada);
      }
      //si perdió
      if(this.nroErrores==10){
        this.terminarJuego(this.nombreJugador+", inténtalo de nuevo!");
      }
    }
  }

  comenzarJuego($event){
    this.nroErrores=0;
    
    this.nroAciertos=0;
  
    this.nombreJugador=$event;
    this.estadoDelJuego = this.ponerPuntosPorLetra(this.palabraJugada);
    this.letraJugada=undefined;
    this.juegoComenzado=true;

    
  }
  terminarJuego(mensaje:string){
    this.nroErrores=10;
    this.nroAciertos=undefined;
    this.nombreJugador=undefined;
    this.estadoDelJuego=undefined;
    this.palabraJugada=undefined;
    this.letraJugada=mensaje;
    this.juegoComenzado=false;
  }

  ponerPuntosPorLetra(palabra: string):string{
    let resp:string="";

    palabra.split("").forEach(element => {
      resp+=".";
    });

    return resp;
    
    
  }
  ngOnInit(): void {
    this.escogerPalabra();
    
  }
  escogerPalabra(): void {
    let cp=prompt("Ingrese 5 palabras separadas por espacios","agua aire fuego tierra electricidad");
    cp=cp.toUpperCase();
    let arr : Array<string> = cp.split(" ");
    this.palabraJugada = arr[Math.trunc(Math.random()*arr.length)];

  }

  
  
}
