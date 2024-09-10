import { Component, inject } from '@angular/core';
import { ChatService } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
})
export class LoginPageComponent {
  chatService = inject(ChatService);
  user$ = this.chatService.user$;
}
