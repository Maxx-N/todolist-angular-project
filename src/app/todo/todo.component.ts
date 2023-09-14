import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() updateIsDone = new EventEmitter<boolean>();
  @Output() updateName = new EventEmitter<string>();
  @Output() deleteTodo = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onUpdateIsDone(isDone: boolean): void {
    this.updateIsDone.emit(isDone);
  }

  onUpdateName(name: string): void {
    this.updateName.emit(name);
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit();
  }

  onAddToFavorite() {
    this.todoService.addFavorite(this.todo.id);
  }
}
