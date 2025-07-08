import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoModel } from '../models/todo.types';
import { TodoItem } from '../components/todo-item/todo-item';
import { Todo } from '../services/todo';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [TodoItem],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todos implements OnInit {
  todoService = inject(Todo);
  todoItems = signal<Array<TodoModel>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromAPI()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((todo) => {
        this.todoItems.set(todo);
      });
  }

  updateTodoItem(todoItem: TodoModel) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            compeleted: !todo.isComplete,
          };
        }
        return todo;
      });
    });
  }
}
