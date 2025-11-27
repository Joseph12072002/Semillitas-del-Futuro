import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

@Component({
  selector: 'modal-layout',
  imports: [],
  templateUrl: './modal-layout.html',
  styleUrl: './modal-layout.css'
})
export class ModalLayout {
  @Output() cerrado = new EventEmitter<void>()
  @Input() titulo? : string // para que este titulo se muestre , modalHeader tiene que ser True
  @Input() modalHeader : boolean = false // opcion/parametro para personalizar el modal, indicandole si queremos un header o no
  currentComponent : Type<any> | undefined 
  cerrar(){
    this.cerrado.emit()
  }
}