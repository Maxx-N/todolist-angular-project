import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Input() filter = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onAddTodo(): void {
    this.todoService.addTodo();
  }

  onUpdateIsDone(todoId: number, isDone: boolean): void {
    this.todoService.updateIsDone(todoId, isDone);
  }

  onUpdateName(todoId: number, name: string): void {
    this.todoService.updateName(todoId, name);
  }

  onDeleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId);
  }

  onFilterTodos(filter: string): void {
    this.todoService.filterTodos(filter);
  }
}
