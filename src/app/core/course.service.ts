import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecaseRsp } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  getMockData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Course Service Work ~");
      }, 800);
    });
  }

  public getForecast(city: string): Observable<ForecaseRsp> {
    return this.http.get<ForecaseRsp>('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001', {
      params: {
        Authorization: environment.API_KEY,
        format: 'JSON',
        locationName: city,
        sort: 'time'
      },
    });

    
  }
}
