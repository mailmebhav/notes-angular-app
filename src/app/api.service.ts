import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Notes } from './notes';
import { Observable, pipe } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: Http) { }

  public getAllTodos(): Observable<Notes[]> {
    return this.http
      .get(API_URL + '/api/Notes')
      .pipe(map(response => {
        const notes = response.json();
        return notes.map((todo) => new Notes(todo));
      }))
      .pipe(catchError(this.handleError));
  }

  public createTodo(todo: Notes): Observable<Notes> {
    return this.http
      .post(API_URL + '/api/Notes', todo)
      .pipe(map(response => {
        return new Notes(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public getTodoById(todoId: number): Observable<Notes> {
    return this.http
      .get(API_URL + '/api/Notes/' + todoId)
      .pipe(map(response => {
        return new Notes(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public updateTodo(todo: Notes): Observable<Notes> {
    return this.http
      .put(API_URL + '/api/Notes/' + todo.id, todo)
      .pipe(map(response => {
        return new Notes(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/api/Notes/' + todoId)
      .pipe(map(response => null))
      .pipe(catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
