import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: 'chatbox.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChatBoxComponent {
  @Input() message: Observable<string>;

  constructor() {}
}
