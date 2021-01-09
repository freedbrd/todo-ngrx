import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from './store/todo/todo.reducer';
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoToggleAction,
} from './store/todo/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import { todoListSelector } from './store/todo/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  get todoList$(): Observable<Todo[]> {
    return this.store$.pipe(
      select(todoListSelector),
    );
  }

  constructor(
    private store$: Store<TodoState>,
  ) {
  }

  ngOnInit(): void {
  }

  onCreate(name: string): void {
    this.store$.dispatch(
      new TodoCreateAction({name}),
    );
  }

  onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id: number): void {
    this.store$.dispatch(new TodoToggleAction({id}))
  }
}
