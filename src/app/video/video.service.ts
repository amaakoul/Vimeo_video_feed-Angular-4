import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

   constructor (
    private http: Http
  ) {}

  getVideo() {
    return this.http.get(`https://demo8496746.mockable.io/vimeo`)
    .map((res:Response) => res.json());
  }

} 