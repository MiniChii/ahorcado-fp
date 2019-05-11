import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  accionTitle: String="Acciones";


  @Output()  letraJugada = new EventEmitter<string>();
  @Output()  nombreJugador = new EventEmitter<string>();
  @Input() juegoComenzado : boolean =false;
  letraform:string;

  constructor() { }

  ngOnInit() {
  }

  
  enviarYborrar():void{
    console.log("Que?:"+this.letraform);
    
    this.letraJugada.emit(this.letraform.toUpperCase());
    this.letraform="";
  }
  comenzarjuego():void{
    this.ingresarNombreJugador();
    this.juegoComenzado=true;
  }


  ingresarNombreJugador(): void {
    let cp=prompt("Ingrese su nombre ","Juan");    
    this.nombreJugador.emit(cp);

  }


}
