import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserStatusComponent } from './chat-user-status.component';

describe('ChatUserStatusComponent', () => {
  let component: ChatUserStatusComponent;
  let fixture: ComponentFixture<ChatUserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatUserStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatUserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
