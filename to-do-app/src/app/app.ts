import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo/todo';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todo, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'to-do-app';
}
