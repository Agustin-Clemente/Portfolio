import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url= 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  public obtenerExperiencia():Observable<experiencia[]>{
    return this.http.get<experiencia[]>(`${this.url}ver/experiencia`);
  }

  public buscarExperiencia( id: number ):Observable<experiencia>{
    return this.http.get<experiencia>(`${this.url}buscar/exp/${id}`);
  }

  /*
  public delete(experiencia: experiencia):Observable<any>{
    return this.http.delete(this.url + 'deleteexp/9');
  }
  */
 
  public delete(id:number):Observable<Object>{
    return this.http.delete(`${this.url}deleteexp/${id}`);
  }

  agregarExp(exp: experiencia):Observable<Object>{
    return this.http.post(`${this.url}new/experiencia`, exp);

  }

  public editarExp(id: number, exp:experiencia):Observable<Object>{
    return this.http.put(`${this.url}editar/exp/${id}`,exp);
  }


  

  
  
}
