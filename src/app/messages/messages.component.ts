import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 只有 messageService 属性为公共属性时，才能在模板中绑定到它。
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
