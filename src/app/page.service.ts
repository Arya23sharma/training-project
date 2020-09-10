// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PageService {

//   constructor() { }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPage } from './page';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private _url: string = "/assets/data/page.json";

  constructor(private http: HttpClient) { }

  getPages(): Observable<IPage[]>{
    return this.http.get<IPage[]>(this._url);

    // return[
    //   {"id": 1, "name": "ganna", "url":"https://gaana.com/album/rock-on-hindi"},
    //   {"id": 2, "name": "angular", "url":"https://angular.io/tutorial/toh-pt5"},
    // ]
  }
}
