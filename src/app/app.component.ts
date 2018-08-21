import { Component, OnInit } from '@angular/core';
import { Notes } from './notes';
import { NotesDataService } from './notes-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesDataService]
})
export class AppComponent {
  // title = 'NotesUI';

  notes: Notes[] = [];
  // newTodo: Notes = new Notes();
  /**
  *
  */
  constructor(private notesDataService : NotesDataService) {
  }

  public ngOnInit() {
    this.notesDataService
    .getAllTodos()
    .subscribe(
      (todos) => {
        this.notes = todos;
      }
    );
  }

  onAddTodo(todo) {
    this.notesDataService
    .addTodo(todo)
    .subscribe(
      (newTodo) => {
        this.notes = this.notes.concat(newTodo);
      }
    );
  }

  onToggleTodoComplete(todo) {
    this.notesDataService
    .toggleTodoComplete(todo)
    .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
    );
  }

  onRemoveTodo(todo) {
    this.notesDataService
    .deleteTodoById(todo.id)
    .subscribe(
      (_) => {
        this.notes = this.notes.filter((t) => t.id !== todo.id);
      }
    );
  }
}
