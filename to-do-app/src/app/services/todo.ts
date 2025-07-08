import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.types';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  http = inject(HttpClient);
  getTodosFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<TodoModel>>(url);
  }
}
