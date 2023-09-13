import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todo.model';

@Pipe({
  name: 'filterTodos',
  pure: false,
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'todo':
        return todos.filter((todo) => !todo.isDone);
      case 'done':
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  }
}
