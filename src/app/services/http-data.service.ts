import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class HttpDataService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseURL;
  }

  get(endPoint: string) {
    return this.http.get(this.url + endPoint);
  }

  post(model, endPoint: string) {
    return this.http.post(this.url + endPoint, model);
  }

  put(model, endPoint: string) {
    return this.http.put(this.url + endPoint, model);
  }
  delete(endPoint: string) {
    return this.http.delete(this.url + endPoint);
  }
}
