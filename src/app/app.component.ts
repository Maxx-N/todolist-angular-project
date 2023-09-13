import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get todos() {
    return this.todoService.todos;
  }

  get filter() {
    return this.todoService.filter
  }

  get favoriteId() {
    return this.todoService.favoriteId
  }

  constructor(private todoService: TodoService) {}
}
