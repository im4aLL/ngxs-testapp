import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { ItemInterface } from "../item-interface";
import { AddItemAction, ToggleItemAction } from "./todo-actions";

export interface TodoStateInterface {
  items: ItemInterface[];
}

@State<TodoStateInterface>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddItemAction)
  addItem(ctx: StateContext<TodoStateInterface>, action: AddItemAction) {
    const { name } = action;
    const state = ctx.getState();
    const item: ItemInterface = {
      name,
      isCompleted: false,
    };

    ctx.setState({
      ...state,
      items: [...state.items, item],
    });
  }

  @Action(ToggleItemAction)
  toggleItem(ctx: StateContext<TodoStateInterface>, action: ToggleItemAction) {
    const { name } = action;
    const state = ctx.getState();
    const newTodoItems = state.items.map(item => {
      if (item.name === name) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }

      return item;
    });

    ctx.setState({
      ...state,
      items: [...newTodoItems],
    });
  }
}
