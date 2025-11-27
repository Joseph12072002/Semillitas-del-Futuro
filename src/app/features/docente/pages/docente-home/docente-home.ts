import { Component } from '@angular/core';
import { ManagementLayout } from '../../../../layouts/management-layout/management-layout';
import { AsideMenuButton } from '../../../../UI/app-aside-menu/app-aside-menu';
import { UserGroupIcon } from '../../../../UI/icons/user-group-icon/user-group-icon';
import { SchoolhatIcon } from '../../../../UI/icons/schoolhat-icon/schoolhat-icon';
import { StackIcon } from '../../../../UI/icons/stack-icon/stack-icon';
import { ManageMisAlumnos } from '../../components/manage-mis-alumnos/manage-mis-alumnos';
import { ManageDocentes } from '../../../admin/components/manage-docentes/manage-docentes';
import { ManageMisActividades } from '../../components/manage-mis-actividades/manage-mis-actividades';
import { ManageMisGrupos } from '../../components/manage-mis-grupos/manage-mis-grupos';
import { BriefcaseIcon } from '../../../../UI/icons/briefcase-icon/briefcase-icon';

@Component({
  selector: 'app-docente-home',
  imports: [ManagementLayout],
  templateUrl: './docente-home.html',
  styleUrl: './docente-home.css'
})
export class DocenteHome{
asideMenuButtons : AsideMenuButton[]=[
   {
      text : "Mis grupos",
      icon : BriefcaseIcon,
      componentRelated : ManageMisGrupos
    },
    {
      text : "Mis alumnos",
      icon : SchoolhatIcon,
      componentRelated : ManageMisAlumnos
    },
    {
      text : "Mis actividades",
      icon : StackIcon,
      componentRelated : ManageMisActividades
    }
  ]
}
