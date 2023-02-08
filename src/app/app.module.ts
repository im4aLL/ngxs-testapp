import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ChildComponent } from './child/child.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoState } from './store/todo-state';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  imports: [
    NgxsModule.forRoot([TodoState], {
      developmentMode: true,
    }),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
