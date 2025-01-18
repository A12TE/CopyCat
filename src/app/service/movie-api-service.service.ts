import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://www.omdbapi.com/";
  apikey = "15d70369";



  //https://www.omdbapi.com/?s=avengers&apikey=15d70369

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}?s=${data.movieName}&apikey=${this.apikey}`);
  }

  //https://www.omdbapi.com/?s=venom&Type=series&apikey=15d70369

  getMovieDetails(data: string, type: string = 'movie'): Observable<any> {
    return this.http.get<any>(`${this.baseurl}?i=${data}&apikey=${this.apikey}`);
  }


 

}
