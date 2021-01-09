import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoList: Todo[] = [];

  @Output()
  delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
