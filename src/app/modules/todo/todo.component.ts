import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from './store/todo/todo.reducer';
import { TodoCreateAction } from './store/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private store$: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  onCreate(name: string): void {
    this.store$.dispatch(
      new TodoCreateAction({name})
    )
  }
}
