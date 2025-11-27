import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLayout } from '../../../../shared/modal-layout/modal-layout';

@Component({
  selector: 'app-actividad-card',
  imports: [ModalLayout],
  templateUrl: './actividad-card.html',
  styleUrl: './actividad-card.css'
})
export class ActividadCard {
  constructor(private router: Router) {}
  
  @Input() titulo: string = "titulo defecto";
  @Input() descripcion: string = "descripcion defecto";
  @Input() id?: number;
  estadoModal: boolean = false;
  
  abrirmodal() {
    this.estadoModal = true;
  }
  
  cerrarModal() {
    this.estadoModal = false;
  }
  
  asignarAGrupo() {
    console.log('Asignar actividad a grupo:', this.id);
    // Aquí puedes agregar la lógica para asignar la actividad a un grupo
    alert('Funcionalidad de asignar a grupo');
    this.cerrarModal();
  }
  
  verCuestionario() {
    this.cerrarModal();
    // Navegar a la página del cuestionario
    this.router.navigate(['/docente/cuestionario', this.id]);
  }
}
