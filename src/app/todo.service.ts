import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  filter: string = 'all';
  favoriteId?: number;

  constructor() {}

  addTodo(): void {
    const id = this.generateNewId();
    const todo: Todo = {
      id,
      name: 'new task ' + id,
      isDone: false,
    };
    this.todos.push(todo);
  }

  updateIsDone(todoId: number, isDone: boolean): void {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
      return;
    }
    this.todos[index].isDone = isDone;
  }

  updateName(todoId: number, name: string): void {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    todo.name = name;
  }

  deleteTodo(todoId: number): void {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(index, 1);
  }

  filterTodos(filter: string): void {
    this.filter = filter;
  }

  addFavorite(id: number) {
    this.favoriteId = id;
  }

  private generateNewId(): number {
    if (this.todos.length === 0) {
      return 1;
    }
    const maxId: number = Math.max(...this.todos.map((todo) => todo.id));
    return maxId + 1;
  }
}
