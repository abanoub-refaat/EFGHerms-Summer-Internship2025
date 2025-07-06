import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal('hello, world form home!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
