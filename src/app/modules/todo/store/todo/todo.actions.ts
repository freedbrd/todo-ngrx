import { Action } from '@ngrx/store';

export enum todoActionsType {
  create = '[TODO] Create todo item',
  delete = '[TODO] Delete todo item',
  toggle = '[TODO] Toggle todo item',
  edit = '[TODO] Edit todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload: { name: string }) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload: { id: number }) {
  }
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;

  constructor(public payload: { id: number }) {
  }
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;

  constructor(public payload: { name: string, id: number }) {
  }
}

export type TodoActions =
  TodoCreateAction
  | TodoDeleteAction
  | TodoToggleAction
  | TodoEditAction;
