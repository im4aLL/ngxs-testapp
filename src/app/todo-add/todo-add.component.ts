import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItemAction } from '../store/todo-actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  constructor(private store: Store) {}

  add(event: SubmitEvent, item: string) {
    event.preventDefault();

    this.store.dispatch(new AddItemAction(item));
  }
}
