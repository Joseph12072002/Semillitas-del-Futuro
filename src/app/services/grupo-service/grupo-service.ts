import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Grupo } from '../../models/grupo/grupo.model';
import { TokenJwt } from '../token';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  constructor(private http : HttpClient){}
  token = new TokenJwt()
  private apiUrl = environment.API_URL


  getGrupos(){
    return this.http.get<Grupo[]>(`${this.apiUrl}/grupos`,{headers : this.token.getAuthHeaders()})
  }

  // este metodo regresara todos los grupos que esten signados a un docente
  // el endpoint es /grupos
  getGruposDocente(id : number){
    return this.http.get<Grupo[]>(`${this.apiUrl}/grupos`,{headers:this.token.getAuthHeaders()})
  }
}
