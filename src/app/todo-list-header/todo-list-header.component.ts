import { Component, Output, EventEmitter } from '@angular/core';
import { Notes } from '../notes'

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent{
  newTodo: Notes = new Notes();

  @Output()
  add: EventEmitter<Notes> = new EventEmitter();

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Notes();
  }
}
