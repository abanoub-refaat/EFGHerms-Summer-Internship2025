import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './todo/todo';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todos, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'to-do-app';
}
