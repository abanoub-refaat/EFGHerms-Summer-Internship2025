import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoModel } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
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
}
