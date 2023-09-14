import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly _todos$ = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todos$.asObservable();
  private readonly _filter$ = new BehaviorSubject<string>('all');
  readonly filter$ = this._filter$.asObservable();
  private readonly _favoriteId$ = new BehaviorSubject<number | undefined>(
    undefined
  );
  readonly favoriteId$ = this._favoriteId$.asObservable();

  constructor() {}

  addTodo(): void {
    const id = this.generateNewId();
    const todo: Todo = {
      id,
      name: 'new task ' + id,
      isDone: false,
    };
    this._todos$.next([...this._todos$.getValue(), todo]);
  }

  updateIsDone(todoId: number, isDone: boolean): void {
    const todo = this._todos$.getValue().find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    this._todos$.next(
      this._todos$.getValue().map((todo) => {
        return todo.id === todoId ? { ...todo, isDone } : todo;
      })
    );
  }

  updateName(todoId: number, name: string): void {
    const todo = this._todos$.getValue().find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    this._todos$.next(
      this._todos$.getValue().map((todo) => {
        return todo.id === todoId ? { ...todo, name } : todo;
      })
    );
  }

  deleteTodo(todoId: number): void {
    const todo = this._todos$.getValue().find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    this._todos$.next(this._todos$.getValue().filter((t) => t.id !== todoId));
  }

  filterTodos(filter: string): void {
    this._filter$.next(filter);
  }

  addFavorite(id: number) {
    this._favoriteId$.next(id);
  }

  private generateNewId(): number {
    if (this._todos$.getValue().length === 0) {
      return 1;
    }
    const maxId: number = Math.max(
      ...this._todos$.getValue().map((todo) => todo.id)
    );
    return maxId + 1;
  }
}
