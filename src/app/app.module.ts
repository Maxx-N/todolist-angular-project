import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FilterTodosPipe } from './filter-todos.pipe';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFavoriteComponent } from './todo-favorite/todo-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    FilterTodosPipe,
    TodoFilterComponent,
    TodoAddComponent,
    TodoComponent,
    TodoFavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
