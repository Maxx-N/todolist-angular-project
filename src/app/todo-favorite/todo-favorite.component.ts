import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-favorite',
  templateUrl: './todo-favorite.component.html',
  styleUrls: ['./todo-favorite.component.css'],
})
export class TodoFavoriteComponent implements OnInit {
  @Input() todos: Todo[] = [];

  get favorite() {
    return this.todos.find((t) => t.id === this.todoService.favoriteId);
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
