import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { SharedModule } from '../shared/shared.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [TodoComponent, TodoFormComponent, TodoItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild([
      {path: '', component: TodoComponent},
    ]),
  ],
})
export class TodoModule {
}
