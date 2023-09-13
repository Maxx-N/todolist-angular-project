import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  @Output() addTodo = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onAddTodo() {
    this.addTodo.emit()
  }
}
