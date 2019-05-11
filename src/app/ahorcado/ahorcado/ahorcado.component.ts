import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit, OnChanges{
  

  ahorcadosTitle : string = "Ahorcado";

  @Input() estadoJuego:string;
  @Input() errores:number;
  imgSrc:string = "assets/ahorcado10.jpg";
  rayitas:string ="";

  
  

  array(palabra:string):Array<string>{
    let resp : Array<string>;
    for(let i=0; i< palabra.length;i++){
        resp[i]=palabra.charAt(i);
    }
    return resp;

  }

  cambiarImagen(nroErr:number) {
      this.imgSrc="assets/ahorcado"+nroErr+".jpg"
  }


  constructor() { 

  }
    
  ngOnInit() {
  
  }
  ngOnChanges(changes: SimpleChanges){
    
    if(changes.errores && changes.errores.currentValue>=0) {
       this.cambiarImagen(this.errores);
       console.log(this.imgSrc)
       console.log(changes.errores.currentValue);
    }



  }

}
