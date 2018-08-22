import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../notes';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Notes;

  @Output()
  remove: EventEmitter<Notes> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Notes> = new EventEmitter();

  @Output()
  update: EventEmitter<Notes> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(todo: Notes) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Notes) {
    this.remove.emit(todo);
  }

  updateTodo(todo: Notes) {
    this.update.emit(todo);
  }

}
