import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todo = new FormControl(null, Validators.required);

  @Output() create = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {value} = this.todo;
    this.create.emit(value);
    this.todo.reset();
  }

}
