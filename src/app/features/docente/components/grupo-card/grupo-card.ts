import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-grupo-card',
  imports: [],
  templateUrl: './grupo-card.html',
  styleUrl: './grupo-card.css'
})
export class GrupoCard {
@Input() nombre_grupo:string="nombre_grupo"
@Input() Id:string="20"
}
