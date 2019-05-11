import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  
  estadisticasTitle: String ="Estadísticas";
  @Input() nroAciertos: number;
  @Input() nroErrores:number;

  constructor() { }

  ngOnInit() {
  }

}
