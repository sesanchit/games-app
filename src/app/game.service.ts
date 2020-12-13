import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiUrl: string = "https://api.jsonbin.io/b/5d45e4d789ed890b24cb25f5";

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.apiUrl);
  }

}
