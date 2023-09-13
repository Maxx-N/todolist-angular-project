import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
})
export class TodoFilterComponent implements OnInit {
  @Input() filter!: string;
  @Output() filterTodos = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilterTodos(filter: string): void {
    this.filterTodos.emit(filter);
  }
}
