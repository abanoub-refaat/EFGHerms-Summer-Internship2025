import { inject, Injectable } from '@angular/core';
import { TodoModel } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
// a service can be direcly provided in a single component
// or it can be provided to the root.
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
