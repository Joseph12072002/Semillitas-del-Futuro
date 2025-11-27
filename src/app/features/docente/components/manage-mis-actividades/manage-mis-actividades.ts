import { Component } from '@angular/core';
import { ActividadCard } from '../actividad-card/actividad-card';
import { OnInit } from '@angular/core';
import { ActividadService } from '../../../../services/actividad-service/actividad-service';
import { Actividad } from '../../../../services/actividad-service/actividad-service';
import { Loader } from '../../../../UI/loader/loader';
import { ModalLayout } from '../../../../shared/modal-layout/modal-layout';


@Component({
  selector: 'app-manage-mis-actividades',
  imports: [ActividadCard,Loader, ModalLayout],
  templateUrl: './manage-mis-actividades.html',
  styleUrl: './manage-mis-actividades.css'
})
export class ManageMisActividades implements OnInit {
  constructor(private actividadService: ActividadService) {}
  actividades: Actividad[] = [];
  isInformacionlista: boolean = false;
  ngOnInit(): void {
    // Aquí puedes cargar las actividades del docente si es necesario
    this.actividadService.getByDocente(35).subscribe({
      next: (respuesta) => {
        // Transformar los títulos de las actividades
        this.actividades = respuesta.data.map(actividad => ({
          ...actividad,
          titulo: actividad.titulo === 'prueba actividad' 
            ? 'Cuestionario de Cuidado del Agua' 
            : actividad.titulo,
          descripcion: actividad.titulo === 'prueba actividad'
            ? 'Evalúa tus conocimientos sobre el cuidado y conservación del agua, recurso vital para la vida.'
            : actividad.descripcion
        }));
        this.isInformacionlista = true;
        console.log(respuesta);
      }
      
    });
  }
  
}