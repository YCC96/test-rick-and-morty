import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(
    private http: HttpClient,
  ) { }

  getCatalog(catalog: string): Observable<any> {
    var url = `${environment.rickAndMortiApi}${catalog.toLowerCase()}`;
    return this.http.get(url);
  }

}
