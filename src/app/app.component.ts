import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos$ = this.todoService.todos$;

  filter$ = this.todoService.filter$;

  favoriteId$ = this.todoService.favoriteId$;

  constructor(private todoService: TodoService) {}
}
