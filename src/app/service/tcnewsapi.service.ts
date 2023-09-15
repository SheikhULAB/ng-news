import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  // top headlines api url
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ca7a94b25c849b28063775243e0bea7'


  // tech news
  techNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1ca7a94b25c849b28063775243e0bea7'

  // business news ap url
  businessNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ca7a94b25c849b28063775243e0bea7'


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


