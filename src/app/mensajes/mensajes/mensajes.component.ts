import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit, OnChanges {
  

  mensajesTitle : string = "Mensajes";
  @Input() nombreRecibido : string;
  mensajesArea: string="";
  @Input() mensajeRecibido: string ;

  

  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    if(changes.nombreRecibido && changes.nombreRecibido.currentValue ) {
      this.mensajesArea+="\n[Mensaje] Que comience el juego "+this.nombreRecibido;
    }

    if(changes.mensajeRecibido && changes.mensajeRecibido.currentValue){
      if(this.mensajeRecibido.length>2){
        this.mensajesArea="\n[Juego Finalizado] "+this.mensajeRecibido+" "+ this.mensajesArea;
      }else{
        this.mensajesArea="\n[Mensaje] "+this.nombreRecibido+", has jugado la letra "+this.mensajeRecibido+" "+this.mensajesArea;
      }
     
    }
    console.log(changes);
  }

}
