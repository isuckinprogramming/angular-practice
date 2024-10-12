import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageChannelListComponent } from './chat-message-channel-list.component';

describe('ChatMessageChannelListComponent', () => {
  let component: ChatMessageChannelListComponent;
  let fixture: ComponentFixture<ChatMessageChannelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageChannelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
