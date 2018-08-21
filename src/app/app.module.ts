import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { NotesDataService } from './notes-data.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule , MatCardModule, MatGridListModule, MatButtonModule, MatIconModule, MatSlideToggleModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [NotesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
