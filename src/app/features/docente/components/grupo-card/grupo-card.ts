import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-grupo-card',
  imports: [],
  templateUrl: './grupo-card.html',
  styleUrl: './grupo-card.css'
})
export class GrupoCard {
@Input() nombre_grupo?:string
@Input() Id?:number
@Output() card_seleccionar=new EventEmitter<any>()
card_seleccionada(){
  this.card_seleccionar.emit(this.nombre_grupo)
}
}
