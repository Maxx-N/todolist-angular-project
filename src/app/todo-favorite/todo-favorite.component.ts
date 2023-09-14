import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-favorite',
  templateUrl: './todo-favorite.component.html',
  styleUrls: ['./todo-favorite.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFavoriteComponent implements OnInit {
  @Input() todos: Todo[] = [];

  favorite$ = this.todoService.favoriteId$.pipe(
    map((id) => {
      return this.todos.find((todo) => todo.id === id);
    })
  );

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
