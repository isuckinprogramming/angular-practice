import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerUserAvatarComponent } from './messenger-user-avatar.component';

describe('MessengerUserAvatarComponent', () => {
  let component: MessengerUserAvatarComponent;
  let fixture: ComponentFixture<MessengerUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessengerUserAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
