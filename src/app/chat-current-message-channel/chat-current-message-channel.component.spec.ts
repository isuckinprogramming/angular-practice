import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCurrentMessageChannelComponent } from './chat-current-message-channel.component';

describe('ChatCurrentMessageChannelComponent', () => {
  let component: ChatCurrentMessageChannelComponent;
  let fixture: ComponentFixture<ChatCurrentMessageChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCurrentMessageChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCurrentMessageChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
