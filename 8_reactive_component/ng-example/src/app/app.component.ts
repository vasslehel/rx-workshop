import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef
} from '@angular/core';

import { ChatBoxComponent } from './components/chatbox.component';

import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('chatBoxContainer', { read: ViewContainerRef })
  chatBoxContainer: ViewContainerRef;

  private chatBoxFactory: ComponentFactory<ChatBoxComponent>;
  private compRef: ComponentRef<ChatBoxComponent>;

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  selectUser(id: number) {
    if (!this.compRef) {
      this.chatBoxFactory = this.factoryResolver.resolveComponentFactory(
        ChatBoxComponent
      );
      this.compRef = this.chatBoxContainer.createComponent(this.chatBoxFactory);
    }
    this.compRef.instance.message = this.messageService.getMessages(id);
  }
}
