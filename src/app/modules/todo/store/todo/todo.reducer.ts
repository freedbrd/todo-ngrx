import { Todo } from '../../models/todo.model';
import { TodoActions, todoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: new Date().getTime(),
            name: action?.payload?.name,
            completed: false,
          },
        ],
      };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter(item => item.id !== action.payload?.id),
        ],
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map(item => {
          return item.id === action.payload.id
            ? {...item, completed: !item.completed}
            : item;
        }),
      };
    default: {
      return state;
    }
  }
};
