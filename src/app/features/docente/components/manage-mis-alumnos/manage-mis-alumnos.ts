import { Component, OnInit } from '@angular/core';
import { AlumnoDocente, headersDocente } from '../../../../models/alumno-docente/alumno-docente.model';
import { AlumnoService } from '../../../../services/alumno-service/alumno-service';
import { AppTable } from '../../../../UI/app-table/app-table';
import { Loader } from '../../../../UI/loader/loader';

@Component({
  selector: 'app-manage-mis-alumnos',
  imports: [AppTable, Loader],
  templateUrl: './manage-mis-alumnos.html',
  styleUrl: './manage-mis-alumnos.css'
})
export class ManageMisAlumnos implements OnInit {
  constructor(private alumno_service: AlumnoService) {}
  
  alumnos: AlumnoDocente[] = [];
  headers = headersDocente;
  isDataReady: boolean = false;
  
  ngOnInit(): void {
    this.alumno_service.getAlumnos().subscribe({
      next: (response) => {
        // Mapear los datos del servicio al modelo simplificado
        this.alumnos = response.map(alumno => ({
          id: alumno.id,
          nombre: alumno.nombre,
          grupo: 'Sin asignar' // Aquí puedes agregar la lógica para obtener el grupo real
        }));
        this.isDataReady = true;
      }
    });
  }
}
