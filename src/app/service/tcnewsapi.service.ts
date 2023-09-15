import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  // top headlines api url
  topHeadlinesNews = 'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&apikey=1fd8479a1c9096af0e352f0e34aa45e9'

  // tech news
  techNews = 'https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&apikey=1fd8479a1c9096af0e352f0e34aa45e9'


  // business news ap url
  businessNews = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=us&apikey=1fd8479a1c9096af0e352f0e34aa45e9'



  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews)
  }

  tcTechNews(): Observable<any> {
    return this._http.get(this.techNews)
  }

  tcBusinessNews(): Observable<any> {
    return this._http.get(this.businessNews)
  }
}


