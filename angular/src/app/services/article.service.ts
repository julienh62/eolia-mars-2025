// src/app/services/article.service.ts
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';
//import { Article } from '../article'


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'https://localhost:8000/api/articles'; // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) {}

      //recuperer les evnmnts depuis symfony
//  getArticles(): Observable<Article[]> {
  //  return this.http.get<Article[]>(this.apiUrl).pipe(
     // tap(articles => console.log('Données reçues:', articles)) // Ajoute ceci

   //  );

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }
} */

  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private apiUrl = 'https://localhost:8000/api/articles'; // URL de ton API

  constructor(private http: HttpClient) { }  // Injection du HttpClient

  // Méthode pour récupérer les utilisateurs
  getArticles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Requête HTTP GET
  }
}

