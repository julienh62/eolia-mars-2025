// src/app/services/user.service.ts
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';
//import { User } from '../user'


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:8000/api/users'; // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) {}

      //recuperer les evnmnts depuis symfony
//  getUsers(): Observable<User[]> {
  //  return this.http.get<User[]>(this.apiUrl).pipe(
     // tap(users => console.log('Données reçues:', users)) // Ajoute ceci

   //  );

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
} */

  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = 'https://localhost:8000/api/users'; // URL de ton API

  constructor(private http: HttpClient) { }  // Injection du HttpClient

  // Méthode pour récupérer les utilisateurs
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  // Requête HTTP GET
  }
}

