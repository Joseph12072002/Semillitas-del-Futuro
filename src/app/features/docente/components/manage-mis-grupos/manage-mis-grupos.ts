import { Component, OnInit } from '@angular/core';
import { GrupoCard } from '../grupo-card/grupo-card';
import { GrupoService } from '../../../../services/grupo-service/grupo-service';
import { Grupo } from '../../../../models/grupo/grupo.model';
import { Loader } from '../../../../UI/loader/loader';
import { ModalLayout } from '../../../../shared/modal-layout/modal-layout';

@Component({
  selector: 'app-manage-mis-grupos',
  imports: [ModalLayout,GrupoCard,Loader],
  templateUrl: './manage-mis-grupos.html',
  styleUrl: './manage-mis-grupos.css'
})
export class ManageMisGrupos implements OnInit {
  constructor(private grupo_service:GrupoService){}
  grupos:Grupo[]=[]
  informacionlista:boolean=false
  modalabierto:boolean=false
  abrirmodal(){
    this.modalabierto=true
  }
  cerrarmodal(){
    this.modalabierto=false
  }
  ngOnInit(): void { 
    this.grupo_service.getGruposDocente(39).subscribe({
      next:(respuestagrupos)=>{
        this.grupos=respuestagrupos
        console.log(respuestagrupos)
        this.informacionlista=true
      }
    })
      
  }

}
