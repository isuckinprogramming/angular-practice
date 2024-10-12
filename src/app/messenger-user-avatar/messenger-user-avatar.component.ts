import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-messenger-user-avatar',
  standalone: true,
  imports: [],
  templateUrl: './messenger-user-avatar.component.html',
  styleUrl: './messenger-user-avatar.component.css'
})
export class MessengerUserAvatarComponent {
  @Input() imageLocation: string = "";
  @Input() isUserSender!: boolean;
}
