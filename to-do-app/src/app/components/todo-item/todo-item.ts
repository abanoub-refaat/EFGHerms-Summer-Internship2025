import { Component, input, output } from '@angular/core';
import { TodoModel } from '../../models/todo.types';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<TodoModel>();
  todoToggle = output<TodoModel>();
  showDisc = false;

  todoClicked() {
    this.todoToggle.emit(this.todo());
  }

  toggleDiscribtion() {
    this.showDisc = !this.showDisc;
  }
}
