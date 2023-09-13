import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];
  filter: string = 'all';

  constructor() {}

  ngOnInit(): void {}

  onAddTodo(): void {
    const id = this.generateNewId();
    const todo: Todo = {
      id,
      name: 'new task ' + id,
      isDone: false,
    };
    this.todos.push(todo);
  }

  onUpdateIsDone(todoId: number, isDone: boolean): void {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
      return;
    }
    this.todos[index].isDone = isDone;
  }

  onUpdateName(todoId: number, name: string): void {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    todo.name = name;
  }

  onDeleteTodo(todoId: number): void {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(index, 1);
  }

  onFilterTodos(filter: string): void {
    this.filter = filter;
  }

  private generateNewId(): number {
    if (this.todos.length === 0) {
      return 1;
    }
    const maxId: number = Math.max(...this.todos.map((todo) => todo.id));
    return maxId + 1;
  }
}
