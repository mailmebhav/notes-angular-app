import { Injectable } from '@angular/core';
import { Notes } from './notes';
import { httpFactory } from '@angular/http/src/http_module';
import { Http, Response} from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {
  // lastID: number = 0;

  // notes: Notes[] = [];
  // private apiurl = 'http://localhost:5050/api/Notes';

  constructor(private api : ApiService) { }

  // Simulate POST /todos
  addTodo(note: Notes): Observable<Notes> {
    return this.api.createTodo(note);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Notes> {
    return this.api.deleteTodoById(id);
  }

  // Simulate PUT /todos/:id
  updateTodoById(note: Notes): Observable<Notes> {
    return this.api.updateTodo(note);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Notes[]>  {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Notes> {
    return this.api.getTodoById(id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Notes){
    return this.api.updateTodo(todo);
  }
}
