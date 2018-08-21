import { Component, EventEmitter, Output, Input } from '@angular/core';
import {Notes} from '../notes';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Notes[] = [];

  @Output()
  remove: EventEmitter<Notes> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Notes> = new EventEmitter();

  @Output()
  update: EventEmitter<Notes> = new EventEmitter();


  constructor() { }

  onToggleTodoComplete(todo: Notes) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Notes) {
    this.remove.emit(todo);
  }
  onUpdateTodo(todo: Notes) {
    this.update.emit(todo);
  }

  ngOninit() {
  }
}
