import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from '../../../../services/actividad-service/actividad-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuestionario',
  imports: [CommonModule],
  templateUrl: './cuestionario.html',
  styleUrl: './cuestionario.css'
})
export class Cuestionario implements OnInit {
  actividadId: number = 0;
  actividad: any = null;
  preguntas: any[] = [];
  String = String; // Para usar String.fromCharCode en el template
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actividadService: ActividadService
  ) {}
  
  ngOnInit(): void {
    this.actividadId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarActividad();
  }
  
  cargarActividad(): void {
    this.actividadService.getById(this.actividadId).subscribe({
      next: (response) => {
        this.actividad = response;
        // Aquí puedes cargar las preguntas si tienes un servicio para eso
        // Por ahora usamos preguntas de ejemplo con respuestas correctas
        this.preguntas = [
          {
            id: 1,
            texto: '¿Cuántos litros de agua se recomienda beber al día?',
            opciones: ['1 litro', '2 litros', '3 litros', '4 litros'],
            respuestaCorrecta: 1 // índice de la respuesta correcta (2 litros)
          },
          {
            id: 2,
            texto: '¿Cuál es la importancia de cuidar el agua?',
            opciones: [
              'Es un recurso renovable infinito',
              'Es un recurso limitado y esencial para la vida',
              'Solo sirve para beber',
              'No es importante'
            ],
            respuestaCorrecta: 1 // Es un recurso limitado y esencial para la vida
          },
          {
            id: 3,
            texto: '¿Qué porcentaje del planeta está cubierto por agua?',
            opciones: ['50%', '60%', '70%', '80%'],
            respuestaCorrecta: 2 // 70%
          }
        ];
      },
      error: (error) => {
        console.error('Error al cargar actividad:', error);
      }
    });
  }
  
  volver(): void {
    this.router.navigate(['/docente']);
  }
}
