import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() updateIsDone = new EventEmitter<boolean>();
  @Output() updateName = new EventEmitter<string>();
  @Output() deleteTodo = new EventEmitter<void>();

  constructor() {}

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
}
