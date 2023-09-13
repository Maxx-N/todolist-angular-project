import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FilterTodosPipe } from './filter-todos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    FilterTodosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
