import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sex } from '../models/sex.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getGenderList() {
    return this.http.get<Sex>(
      `${environment.apiUrl}/odata/Sexes`
    ).pipe(
      map((res: any) => res.value as Sex[])
    );
  }
}
