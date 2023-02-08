import { Selector } from "@ngxs/store";
import { ItemInterface } from "../item-interface";
import { TodoState, TodoStateInterface } from "./todo-state";

export class TodoSelector {
  @Selector([TodoState])
  static items(state: TodoStateInterface): ItemInterface[] {
    return state.items;
  }
}
