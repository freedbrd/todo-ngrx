import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<{name: string, id: number}>();

  currentTodoId: any;

  todoControl = new FormControl('', Validators.required);

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onToggle(event: MouseEvent, id: number): void {
    event.preventDefault();

    this.toggle.emit(id);
  }

  editName(todo: Todo): void {
    this.currentTodoId = todo.id;
    this.todoControl.patchValue(todo.name);
  }

  save(): void {
    this.edit.emit(
      {
        name: this.todoControl.value,
        id: this.currentTodoId
      }
    );

    this.currentTodoId = null;
    this.todoControl.reset();
  }
}
