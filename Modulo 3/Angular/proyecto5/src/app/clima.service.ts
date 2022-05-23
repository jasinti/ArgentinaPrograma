import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://ws.smn.gob.ar/map_items/weather");
  }
}