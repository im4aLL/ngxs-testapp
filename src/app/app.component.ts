import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ItemInterface } from './item-interface';
import { TodoSelector } from './store/todo-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  @Select(TodoSelector.items) items$: Observable<ItemInterface[]>;

  constructor() {}
}
