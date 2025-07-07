import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  iscompleted = input(false);
  constructor() {}
  el = inject(ElementRef);
  styleEffect = effect(() => {
    if (this.iscompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9dB';
      this.el.nativeElement.style.color = '#6cl757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });
}
