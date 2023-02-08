import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { ItemInterface } from '../item-interface';
import { ToggleItemAction } from '../store/todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item!: ItemInterface;

  constructor(private store: Store) {}

  toggle() {
    this.store.dispatch(new ToggleItemAction(this.item.name));
  }
}
