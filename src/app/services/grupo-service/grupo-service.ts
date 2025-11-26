import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TokenJwt } from '../token';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  constructor(private http : HttpClient){}
  token = new TokenJwt()
  private apiUrl = environment.API_URL



  
}
